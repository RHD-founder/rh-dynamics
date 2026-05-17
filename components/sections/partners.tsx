"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Using reliable SVGs/PNGs for partners
const partners = [
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg",
  },
  {
    name: "DigitalOcean",
    logo: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-ar21.svg",
  },
  {
    name: "MongoDB",
    logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
  },
  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Vercel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg",
  }
];

export function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="container px-4 mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
          Powered By Industry Leaders
        </p>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 hover:opacity-100 transition-opacity duration-500"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative h-10 w-32 md:h-12 md:w-40">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain dark:brightness-0 dark:invert"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}