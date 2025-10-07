"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {project.title}
            {project.featured && (
              <Badge variant="secondary" className="ml-2">
                Featured
              </Badge>
            )}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="outline">+{project.techStack.length - 4}</Badge>
            )}
          </div>

          <div className="mt-auto flex gap-2">
            <Link href={`/projects/${project.id}`} className="flex-1">
              <Button variant="default" className="w-full">
                View Details
              </Button>
            </Link>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
