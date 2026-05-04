import React from 'react';

const JSONLD = () => {
  const schema = {
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
      "User Experience Design"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default JSONLD;
