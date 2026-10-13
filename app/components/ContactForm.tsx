"use client";

import { FormEvent, useState } from "react";
import es from "../content/es";

type ContactContent = typeof es;

export default function ContactForm({
  content,
}: {
  content: ContactContent;
}) {
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
        <label htmlFor="name">
          {content.contact.form.name}
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder={content.contact.form.namePlaceholder}
          autoComplete="name"
          required
        />
      </div>

      <div className="formField">
        <label htmlFor="email">
          {content.contact.form.email}
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder={content.contact.form.emailPlaceholder}
          autoComplete="email"
          required
        />
      </div>

      <div className="formRow">
        <div className="formField">
          <label htmlFor="projectType">
            {content.contact.form.projectType}
          </label>

          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            required
          >
            <option value="" disabled>
              {content.contact.form.projectTypePlaceholder}
            </option>

            <option value="photography">
              {content.contact.form.options.photography}
            </option>

            <option value="editorial">
              {content.contact.form.options.editorial}
            </option>

            <option value="campaign">
              {content.contact.form.options.campaign}
            </option>

            <option value="portrait">
              {content.contact.form.options.portrait}
            </option>

            <option value="product">
              {content.contact.form.options.product}
            </option>

            <option value="motorsport">
              {content.contact.form.options.motorsport}
            </option>

            <option value="other">
              {content.contact.form.options.other}
            </option>
          </select>
        </div>

        <div className="formField">
          <label htmlFor="date">
            {content.contact.form.projectDate}
          </label>

          <input
            id="date"
            name="date"
            type="date"
          />
        </div>
      </div>

      <div className="formField">
        <label htmlFor="message">
          {content.contact.form.message}
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={content.contact.form.messagePlaceholder}
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
            ? content.contact.form.status.sending
            : status === "success"
            ? content.contact.form.status.success
            : status === "error"
            ? content.contact.form.status.error
            : content.contact.form.status.idle}
        </span>

        <span className="submitArrow">
          ↗
        </span>
      </button>
    </form>
  );
}