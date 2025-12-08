import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://luismachadoreis.dev";
const SITE_NAME = "Luis Machado Reis - Portfolio";
const PROFILE_IMAGE = `${SITE_URL}/luis-profile.png`;

// SEO metadata translations
const SEO_TRANSLATIONS = {
  "pt-BR": {
    title: "Luis Machado Reis - Arquiteto de Software Estratégico | Portfolio",
    description:
      "Arquiteto de Software Estratégico com 20+ anos de experiência. Gerente de Engenharia de Software na Sears e Especialista Sênior em Software na Singular Ideas. Especialista em arquitetura de software, sistemas em nuvem AWS, liderança técnica e inovação.",
    keywords:
      "Luis Machado Reis, arquiteto de software, gerente de engenharia, AWS, cloud computing, liderança técnica, software architecture, fintech, SaaS, telecomunicações, DevOps, React, portfolio",
  },
  en: {
    title: "Luis Machado Reis - Strategic Software Architect | Portfolio",
    description:
      "Strategic Software Architect with 20+ years of experience. Software Engineering Manager at Sears and Senior Software Specialist at Singular Ideas. Expert in software architecture, AWS cloud systems, technical leadership, and innovation.",
    keywords:
      "Luis Machado Reis, software architect, engineering manager, AWS, cloud computing, technical leadership, software architecture, fintech, SaaS, telecommunications, DevOps, React, portfolio",
  },
  es: {
    title: "Luis Machado Reis - Arquitecto de Software Estratégico | Portfolio",
    description:
      "Arquitecto de Software Estratégico con 20+ años de experiencia. Gerente de Ingeniería de Software en Sears y Especialista Senior en Software en Singular Ideas. Experto en arquitectura de software, sistemas en la nube AWS, liderazgo técnico e innovación.",
    keywords:
      "Luis Machado Reis, arquitecto de software, gerente de ingeniería, AWS, cloud computing, liderazgo técnico, arquitectura de software, fintech, SaaS, telecomunicaciones, DevOps, React, portfolio",
  },
};

function SEO() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const seo = SEO_TRANSLATIONS[lang] || SEO_TRANSLATIONS.en;

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", seo.description);
    updateMetaTag("keywords", seo.keywords);
    updateMetaTag("author", "Luis Machado Reis");
    updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMetaTag("googlebot", "index, follow");
    updateMetaTag("language", lang);
    updateMetaTag("revisit-after", "7 days");

    // Open Graph tags
    updateMetaTag("og:title", seo.title, "property");
    updateMetaTag("og:description", seo.description, "property");
    updateMetaTag("og:image", PROFILE_IMAGE, "property");
    updateMetaTag("og:url", SITE_URL, "property");
    updateMetaTag("og:type", "profile", "property");
    updateMetaTag("og:site_name", SITE_NAME, "property");
    updateMetaTag("og:locale", lang === "pt-BR" ? "pt_BR" : lang === "es" ? "es_ES" : "en_US", "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", seo.title);
    updateMetaTag("twitter:description", seo.description);
    updateMetaTag("twitter:image", PROFILE_IMAGE);
    updateMetaTag("twitter:creator", "@luismr");
    updateMetaTag("twitter:site", "@luismr");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", SITE_URL);

    // Language alternates
    const languages = ["en", "pt-BR", "es"];
    languages.forEach((l) => {
      let alternate = document.querySelector(`link[rel="alternate"][hreflang="${l}"]`);
      if (!alternate) {
        alternate = document.createElement("link");
        alternate.setAttribute("rel", "alternate");
        alternate.setAttribute("hreflang", l);
        document.head.appendChild(alternate);
      }
      alternate.setAttribute("href", SITE_URL);
    });

    // Add x-default
    let xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!xDefault) {
      xDefault = document.createElement("link");
      xDefault.setAttribute("rel", "alternate");
      xDefault.setAttribute("hreflang", "x-default");
      document.head.appendChild(xDefault);
    }
    xDefault.setAttribute("href", SITE_URL);

    // Structured Data (JSON-LD)
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredData);
    }

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Luis Machado Reis",
      url: SITE_URL,
      image: PROFILE_IMAGE,
      jobTitle: lang === "pt-BR" 
        ? "Arquiteto de Software Estratégico · Gerente de Engenharia de Software"
        : lang === "es"
        ? "Arquitecto de Software Estratégico · Gerente de Ingeniería de Software"
        : "Strategic Software Architect · Software Engineering Manager",
      worksFor: [
        {
          "@type": "Organization",
          name: "Sears",
          jobTitle: lang === "pt-BR" 
            ? "Gerente de Engenharia de Software"
            : lang === "es"
            ? "Gerente de Ingeniería de Software"
            : "Software Engineering Manager",
        },
        {
          "@type": "Organization",
          name: "Singular Ideas",
          jobTitle: lang === "pt-BR"
            ? "Especialista Sênior em Software"
            : lang === "es"
            ? "Especialista Senior en Software"
            : "Senior Software Specialist",
        },
      ],
      sameAs: [
        "https://github.com/luismr",
        "https://linkedin.com/in/luismachadoreis",
        "https://instagram.com/luismachadoreis",
      ],
      description: seo.description,
      knowsAbout: [
        "Software Architecture",
        "Cloud Computing",
        "AWS",
        "Engineering Leadership",
        "DevOps",
        "Fintech",
        "SaaS",
        "React",
      ],
      alumniOf: {
        "@type": "Organization",
        name: "Software Engineering Professional",
      },
    };

    structuredData.textContent = JSON.stringify(personSchema);

    // Website schema
    let websiteSchema = document.querySelector('script[type="application/ld+json"][data-schema="website"]');
    if (!websiteSchema) {
      websiteSchema = document.createElement("script");
      websiteSchema.setAttribute("type", "application/ld+json");
      websiteSchema.setAttribute("data-schema", "website");
      document.head.appendChild(websiteSchema);
    }

    const websiteSchemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: seo.description,
      inLanguage: lang,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };

    websiteSchema.textContent = JSON.stringify(websiteSchemaData);
  }, [lang, seo]);

  return null; // This component doesn't render anything
}

export default SEO;

