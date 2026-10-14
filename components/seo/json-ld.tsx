export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://rhdynamics.in/#organization",
        "name": "RH Dynamics",
        "legalName": "RH Dynamics",
        "alternateName": ["RH Dynamics IT Solutions", "RH Dynamics Guwahati"],
        "url": "https://rhdynamics.in",
        "logo": "https://rhdynamics.in/light-logo.png",
        "image": "https://rhdynamics.in/opengraph-image",
        "description": "RH Dynamics is a leading software development company, custom ERP and HSMS (Hospital Management System) provider based in Guwahati, Assam, serving Northeast India and global enterprises.",
        "telephone": "+918638875149",
        "email": "support@rhdynamics.in",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Downtown Hospital, Urban Villa, Sarumotoria",
          "addressLocality": "Guwahati",
          "addressRegion": "Assam",
          "postalCode": "781036",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.1360,
          "longitude": 91.7925
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Guwahati" },
          { "@type": "AdministrativeArea", "name": "Assam" },
          { "@type": "AdministrativeArea", "name": "Northeast India" },
          { "@type": "Country", "name": "India" },
          { "@type": "Place", "name": "Global" }
        ],
        "knowsAbout": [
          "Website Development",
          "Custom Software Development",
          "Hospital Management System (HSMS)",
          "Enterprise Resource Planning (ERP)",
          "Mobile App Development",
          "Search Engine Optimization (SEO)",
          "Performance Marketing",
          "Campus IT Infrastructure & AI Robotics Labs"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://rhdynamics.in/#website",
        "url": "https://rhdynamics.in",
        "name": "RH Dynamics",
        "description": "Premier Software Development, Web Design & HSMS Solutions in Guwahati, Assam, Northeast India & Globally",
        "publisher": {
          "@id": "https://rhdynamics.in/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "SoftwareApplication",
        "name": "RH-HSMS (Hospital & Healthcare Management System)",
        "operatingSystem": "Cloud-Native, Web-Based",
        "applicationCategory": "BusinessApplication",
        "description": "End-to-end hospital information management software featuring OPD/IPD management, doctor appointments, pharmacy billing, laboratory records, and patient tracking.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "description": "Contact for custom enterprise demo & pricing"
        },
        "provider": {
          "@id": "https://rhdynamics.in/#organization"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "RH Enterprise ERP & Custom Software",
        "operatingSystem": "Cloud-Native, Web-Based",
        "applicationCategory": "EnterpriseApplication",
        "description": "Tailor-made Enterprise Resource Planning systems, inventory automation, HRMS, and bespoke cloud business platforms.",
        "provider": {
          "@id": "https://rhdynamics.in/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://rhdynamics.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best software and web development company in Guwahati, Assam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RH Dynamics is widely recognized as a premier software development and digital transformation company in Guwahati, Assam. Located near Downtown Hospital, Sarumotoria, RH Dynamics engineers enterprise web applications, mobile apps, custom ERP systems, and hospital management software (HSMS) with modern cloud architecture."
            }
          },
          {
            "@type": "Question",
            "name": "What is RH-HSMS and why is it preferred by hospitals in Northeast India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RH-HSMS is RH Dynamics' proprietary Hospital Management Information System. It features end-to-end OPD/IPD tracking, doctor workstations, integrated pharmacy, pathology LIS with WhatsApp reports, and compliance with ABDM (Ayushman Bharat Digital Mission) and regional health schemes like PMJAY and Atal Amrit Abhiyan."
            }
          },
          {
            "@type": "Question",
            "name": "Does RH Dynamics provide custom ERP development for businesses in Assam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, RH Dynamics architects bespoke Enterprise Resource Planning (ERP) software tailored for manufacturing, healthcare, retail, logistics, and educational institutions across Assam, Northeast India, and international enterprises."
            }
          },
          {
            "@type": "Question",
            "name": "How can I hire RH Dynamics for my software or web development project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach RH Dynamics by visiting our Guwahati headquarters near Downtown Hospital, calling +91 86388 75149 or +91 98648 48781, or submitting a project inquiry online at rhdynamics.in/contact for a same-day technical consultation."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
