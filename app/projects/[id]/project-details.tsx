"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Project } from "@/lib/types"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const sections = [
    { title: "The Problem", content: project.problem },
    { title: "My Approach", content: project.approach },
    { title: "Challenges Faced", content: project.challenges },
    { title: "Key Takeaways", content: project.takeaways },
  ]

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
              {project.featured && (
                <Badge className="mt-2">Featured</Badge>
              )}
            </div>
            <p className="text-xl text-muted-foreground">{project.longDescription}</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </a>
            )}
          </div>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12 bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-muted/30 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
