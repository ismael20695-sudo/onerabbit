"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          projectType: formData.get("projectType"),
          date: formData.get("date"),
          message: formData.get("message"),

          // Honeypot
          website: formData.get("website"),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to send");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formField">
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>

      <div className="formField">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          autoComplete="email"
          required
        />
      </div>

      <div className="formRow">
        <div className="formField">
          <label htmlFor="projectType">Project type</label>

          <select
            id="projectType"
            name="projectType"
            defaultValue=""
          >
            <option value="" disabled>
              Select project type
            </option>

            <option value="photography">
              Photography
            </option>

            <option value="editorial">
              Editorial
            </option>

            <option value="campaign">
              Campaign
            </option>

            <option value="portrait">
              Portrait
            </option>

            <option value="product">
              Product
            </option>

            <option value="motorsport">
              Motorsport
            </option>

            <option value="other">
              Other
            </option>
          </select>
        </div>

        <div className="formField">
          <label htmlFor="date">Project date</label>

          <input
            id="date"
            name="date"
            type="date"
          />
        </div>
      </div>

      <div className="formField">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A few words about what you have in mind..."
          required
        />
      </div>

      {/* Honeypot anti-spam field */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        className="contactSubmit"
        disabled={status === "sending"}
      >
        <span>
          {status === "sending"
            ? "SENDING..."
            : status === "success"
            ? "BRIEF SENT"
            : status === "error"
            ? "TRY AGAIN"
            : "SEND BRIEF"}
        </span>

        <span className="submitArrow">
          ↗
        </span>
      </button>
    </form>
  );
}