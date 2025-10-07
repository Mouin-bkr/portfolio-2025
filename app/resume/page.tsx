"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import { experiences } from "@/lib/data/experience"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export default function Resume() {
  const workExperience = experiences.filter(exp => exp.type === 'work')
  const education = experiences.filter(exp => exp.type === 'education')

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            title="Resume"
            subtitle="My professional journey and achievements"
            centered
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Full CV
          </Button>
        </motion.div>

        <div className="mt-16 space-y-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </motion.div>

            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="relative hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" />
                    <CardContent className="pt-6 pl-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-lg text-primary">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <p className="text-sm font-medium bg-muted px-3 py-1 rounded-full">
                            {exp.startDate} - {exp.endDate}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="relative hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" />
                    <CardContent className="pt-6 pl-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-lg text-primary">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <p className="text-sm font-medium bg-muted px-3 py-1 rounded-full">
                            {exp.startDate} - {exp.endDate}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-muted/30 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Interested in my experience and background? Let's discuss how we can work together.
          </p>
          <Button size="lg">
            Contact Me
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
