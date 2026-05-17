import React from 'react';

const JSONLD = () => {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Lucas Lima Digital",
      "url": "https://lucaslimadigital.vercel.app/",
      "description": "Criação de sites de alta performance, landing pages de alta conversão, design UX/UI, branding e consultoria digital em Bauru/SP."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Lucas Lima",
      "url": "https://lucaslimadigital.vercel.app/",
      "image": "https://lucaslimadigital.vercel.app/assets/banner.png",
      "sameAs": [
        "https://github.com/lukaslimna1",
        "https://linkedin.com/in/lucaslimna/",
        "https://wa.me/5514988025296"
      ],
      "jobTitle": "Digital Product Builder",
      "worksFor": {
        "@type": "Organization",
        "name": "Lucas Lima Digital"
      },
      "description": "Desenvolvedor Frontend, Designer e Engenheiro de Produto — Focado em construir interfaces de alta performance, UX/UI e experiências digitais modernas."
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Lucas Lima Digital",
      "url": "https://lucaslimadigital.vercel.app/",
      "logo": "https://lucaslimadigital.vercel.app/assets/logo.png",
      "founder": {
        "@type": "Person",
        "name": "Lucas Lima"
      },
      "sameAs": [
        "https://github.com/lukaslimna1",
        "https://linkedin.com/in/lucaslimna/",
        "https://wa.me/5514988025296"
      ],
      "description": "Consultoria e desenvolvimento de soluções digitais de alto impacto: sites institucionais, landing pages, e-commerce, design UX/UI e branding."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Criação de Sites, UX/UI Design & Branding",
      "serviceType": "Criação de Sites, Webdesign, Landing Pages, UX/UI Design, Branding, Consultoria Digital",
      "provider": {
        "@type": "Organization",
        "name": "Lucas Lima Digital",
        "url": "https://lucaslimadigital.vercel.app/"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Bauru, São Paulo, Brasil"
        }
      ],
      "description": "Criação de sites profissionais rápidos e otimizados para o Google, landing pages focadas em conversão, design de interfaces e posicionamento de marca."
    }
  ];

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemas)}
    </script>
  );
};

export default JSONLD;

