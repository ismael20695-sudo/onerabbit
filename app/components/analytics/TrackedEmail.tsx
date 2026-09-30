"use client";

import { trackEvent } from "@/app/lib/analytics";

export default function TrackedEmail() {
  return (
    <a
      className="contactMail"
      href="mailto:hello@onerabbit.studio"
      onClick={() => trackEvent("email_click")}
    >
      hello@onerabbit.studio
    </a>
  );
}