"use client"

import { SectionTitle } from "@/components/section-title"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data/projects"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            title="My Projects"
            subtitle="A collection of my work showcasing various skills and technologies"
            centered
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center gap-4"
        >
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'featured' ? 'default' : 'outline'}
            onClick={() => setFilter('featured')}
          >
            Featured Only
          </Button>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">No projects found.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
