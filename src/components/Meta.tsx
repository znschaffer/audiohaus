import React from "react";
import { Helmet } from "react-helmet";
import { SITE, CONTACT, HERO } from "../content";

const SITE_URL = "https://audioha.us";

export default function Meta({
  title,
  description,
  pathname = "/",
}: {
  title?: string;
  description?: string;
  pathname?: string;
}) {
  const metaTitle = title ?? `${SITE.name} — ${SITE.tagline}`;
  const metaDescription =
    description ??
    HERO.body ??
    "AudioHaus — Seattle sound rental and production.";
  const canonical = `${SITE_URL.replace(/\/$/, "")}${pathname}`;

  // Pick phone and email from CONTACT.details (matches your content.ts structure)
  const phoneObj = CONTACT.details.find((d) => d.label === "Phone");
  const emailObj = CONTACT.details.find((d) => d.label === "Email");
  const telephone =
    phoneObj?.href?.replace("tel:", "") ?? phoneObj?.value ?? "";
  const email = emailObj?.href?.replace("mailto:", "") ?? emailObj?.value ?? "";

  return (
    <Helmet>
      {/* JSON-LD structured data */}
      <script type="application/ld+json"></script>
    </Helmet>
  );
}
