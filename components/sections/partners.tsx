"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
    name: "MongoDB Atlas",
    logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
  },
  {
    name: "Supabase",
    logo: "https://www.vectorlogo.zone/logos/supabase/supabase-ar21.svg",
  },
  {
    name: "Hostinger",
    logo: "https://assets.hostinger.com/images/logo-homepage2020-f9c79137d7.svg",
  },
  {
    name: "Clerk",
    logo: "https://images.clerk.dev/static/clerk.svg",
  },
  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
];

export function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={60}
                className="h-12 object-contain dark:filter dark:brightness-0 dark:invert"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}