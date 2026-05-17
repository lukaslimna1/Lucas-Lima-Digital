import React from 'react';

const JSONLD = () => {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Lucas Lima Digital",
      "image": "https://lucaslimadigital.com.br/assets/banner.png",
      "@id": "https://lucaslimadigital.com.br/#website",
      "url": "https://lucaslimadigital.com.br",
      "telephone": "+55-14-98802-5296",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bauru",
        "addressLocality": "Bauru",
        "addressRegion": "SP",
        "postalCode": "17011-100",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -22.3145,
        "longitude": -49.0587
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://github.com/lukaslimna1",
        "https://linkedin.com/in/lucaslimna/",
        "https://wa.me/5514988025296"
      ],
      "description": "Criação de sites profissionais de alta performance, landing pages de alta conversão, design UX/UI, branding e consultoria digital em Bauru/SP."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Lucas Lima",
      "url": "https://lucaslimadigital.com.br",
      "image": "https://lucaslimadigital.com.br/assets/banner.png",
      "sameAs": [
        "https://github.com/lukaslimna1",
        "https://linkedin.com/in/lucaslimna/",
        "https://wa.me/5514988025296"
      ],
      "jobTitle": "Digital Product Builder",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance / Self-Employed"
      },
      "description": "Construção de Sistemas & Experiências Digitais — Focado em arquiteturas escaláveis, IA generativa e interfaces de alta performance.",
      "knowsAbout": [
        "Software Architecture",
        "Product Management",
        "Artificial Intelligence",
        "React",
        "Node.js",
        "Cloud Engineering",
        "User Experience Design",
        "Web Design",
        "SEO"
      ]
    }
  ];

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemas)}
    </script>
  );
};

export default JSONLD;

