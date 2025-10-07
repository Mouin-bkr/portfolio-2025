"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center" : ""}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
