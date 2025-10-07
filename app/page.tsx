"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code2, Palette, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { projects } from "@/lib/data/projects"
import { ProjectCard } from "@/components/project-card"

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code following best practices.",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful, intuitive user interfaces with attention to detail.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast, optimized applications with excellent user experience.",
  },
]

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <div className="relative">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Your Name
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                Full-Stack Developer & UI/UX Enthusiast
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                I build exceptional digital experiences that combine beautiful design with powerful functionality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-12"
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted by companies worldwide</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I specialize in building modern web applications with a focus on quality, performance, and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and passion for building great software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <Link href="/contact">
              <Button size="lg">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
