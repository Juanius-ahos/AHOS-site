import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const SITE_NAME = "AHOS - Digital Product Studio";
const SITE_URL = "https://www.ahos.xyz";
const DEFAULT_DESC = "AHOS is a digital product studio building websites, custom software, Web3 interfaces, AI tools, and brand identities for businesses worldwide.";
const BASE_OG = `${SITE_URL}/AHOS-site/opengraph.jpg`;

function inject(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    if (name.startsWith("og:")) el.setAttribute("property", name);
    else el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function SEOHead({ title, description, path, ogImage }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const og = ogImage || BASE_OG;

  useEffect(() => {
    document.title = fullTitle;
    inject("description", description);
    inject("og:title", fullTitle);
    inject("og:description", description);
    inject("og:url", url);
    inject("og:image", og);
    inject("og:type", "website");
    inject("og:site_name", SITE_NAME);
    inject("twitter:card", "summary_large_image");
    inject("twitter:title", fullTitle);
    inject("twitter:description", description);
    inject("twitter:image", og);
  }, [fullTitle, description, url, og]);

  return null;
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AHOS",
    alternateName: "Advanced Hybrid Online Systems",
    url: SITE_URL,
    logo: `${SITE_URL}/AHOS-site/logo.png`,
    description: DEFAULT_DESC,
    email: "info@ahos.xyz",
    sameAs: [
      "https://www.instagram.com/ahos.xyz/",
      "https://www.linkedin.com/company/ahos-xyz",
      "https://www.youtube.com/@ahos_xyz",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@ahos.xyz",
      contactType: "sales",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
