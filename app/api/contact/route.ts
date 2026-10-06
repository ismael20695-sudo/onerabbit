import { NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      projectType,
      date,
      message,
      website,
    } = body;

    // Honeypot anti-spam
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete the required fields.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const projectLabels: Record<string, string> = {
      photography: "Photography",
      editorial: "Editorial",
      campaign: "Campaign",
      portrait: "Portrait",
      product: "Product",
      motorsport: "Motorsport",
      other: "Other",
    };

    const projectName =
      projectLabels[projectType] || projectType || "Not specified";

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeDate = date ? String(date).trim() : "Not specified";
    const safeMessage = String(message).trim();

    const emailHtml = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 680px; margin: 0 auto; color: #111;">
        
        <div style="border-bottom: 1px solid #ddd; padding-bottom: 20px; margin-bottom: 32px;">
          <div style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;">
            ONERABBIT · NEW PROJECT
          </div>
        </div>

        <h1 style="font-family: Georgia, serif; font-weight: 400; font-size: 42px; line-height: 1; margin: 0 0 32px;">
          New project enquiry.
        </h1>

        <div style="margin-bottom: 28px;">
          <div style="font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #777; margin-bottom: 8px;">
            Name
          </div>
          <div style="font-size: 16px;">
            ${safeName}
          </div>
        </div>

        <div style="margin-bottom: 28px;">
          <div style="font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #777; margin-bottom: 8px;">
            Email
          </div>
          <div style="font-size: 16px;">
            ${safeEmail}
          </div>
        </div>

        <div style="margin-bottom: 28px;">
          <div style="font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #777; margin-bottom: 8px;">
            Project type
          </div>
          <div style="font-size: 16px;">
            ${projectName}
          </div>
        </div>

        <div style="margin-bottom: 28px;">
          <div style="font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #777; margin-bottom: 8px;">
            Project date
          </div>
          <div style="font-size: 16px;">
            ${safeDate}
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          <div style="font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #777; margin-bottom: 8px;">
            Message
          </div>

          <div style="font-size: 16px; line-height: 1.6; white-space: pre-line;">
            ${safeMessage}
          </div>
        </div>

        <div style="border-top: 1px solid #ddd; padding-top: 20px; font-size: 11px; color: #777;">
          Sent from onerabbit.studio
        </div>

      </div>
    `;

    const brevoResponse = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "ONERABBIT",
          email: "hello@onerabbit.studio",
        },
        to: [
          {
            email: "hello@onerabbit.studio",
            name: "ONERABBIT",
          },
        ],
        replyTo: {
          email: safeEmail,
          name: safeName,
        },
        subject: `[ONERABBIT] ${projectName} · ${safeName}`,
        htmlContent: emailHtml,
      }),
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();

      console.error("Brevo error:", errorText);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to send your message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}