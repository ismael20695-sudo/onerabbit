type JsonLd = Record<string, unknown>;

function safeJsonLd(data: JsonLd) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData({ data }: { data: JsonLd }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd(data),
      }}
    />
  );
}

export function SiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.onerabbit.studio/#organization",
        name: "ONERABBIT",
        url: "https://www.onerabbit.studio",
        logo: "https://www.onerabbit.studio/ISOTIPO-02.svg",
        description:
          "Independent photography practice focused on portrait, fashion, product and visual culture.",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.onerabbit.studio/#website",
        name: "ONERABBIT",
        url: "https://www.onerabbit.studio",
        publisher: {
          "@id": "https://www.onerabbit.studio/#organization",
        },
      },
    ],
  };

  return <StructuredData data={data} />;
}

export function ProjectStructuredData({
  name,
  description,
  url,
  image,
  inLanguage,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  inLanguage: "es" | "en";
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name,
    description,
    url,
    image,
    inLanguage,
    creator: {
      "@id": "https://www.onerabbit.studio/#organization",
    },
    isPartOf: {
      "@id": "https://www.onerabbit.studio/#website",
    },
  };

  return <StructuredData data={data} />;
}