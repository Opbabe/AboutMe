"use client"

import React from 'react'
import { Code, Layers, Wrench, Glasses } from 'lucide-react'
import { motion } from 'framer-motion'

interface SkillsProps {
  id: string;
}

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-600",
    skills: ["TypeScript", "Python", "Golang", "Java", "Swift", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="h-6 w-6" />,
    color: "from-blue-500 to-indigo-600",
    skills: ["Node.js", "React", "Next.js", "Unity", "Unreal Engine", "ARKit", "Core Graphics"],
  },
  {
    title: "XR & 3D Tools",
    icon: <Glasses className="h-6 w-6" />,
    color: "from-purple-500 to-pink-600",
    skills: ["Oculus Developer Tools", "Meta Quest Kit", "Blender", "Autodesk Maya", "Visual Studio"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Wrench className="h-6 w-6" />,
    color: "from-orange-500 to-red-600",
    skills: ["Git", "Linux", "Docker", "AWS", "GCP"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From full-stack development to immersive XR experiences, here&apos;s my technical toolkit.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Always learning, always building. Currently exploring spatial computing and AI integration.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

