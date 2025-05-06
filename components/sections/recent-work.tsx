"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recentWork = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    tech: ["Next.js", "TypeScript", "Supabase"],
    link: "/projects/e-commerce",
  },
  {
    title: "Healthcare App",
    description: "Mobile application for healthcare providers with appointment scheduling",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tech: ["React Native", "Node.js", "MongoDB"],
    link: "/projects/healthcare",
  },
  {
    title: "Educational Platform",
    description: "Online learning platform with video streaming and interactive quizzes",
    image: "https://btpvofmkuwtbutwggbli.supabase.co/storage/v1/object/public/%20SE-5286761//rcw.jpeg",
    tech: ["Next.js", "AWS", "PostgreSQL"],
    link: "/projects/education",
  },
];

export function RecentWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Recent Work
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {recentWork.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-white/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={project.link}>
                  <Button variant="secondary" size="sm">
                    View Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button asChild>
            <Link href="/projects">
              View Our Work
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
