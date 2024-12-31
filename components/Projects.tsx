'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "Career Quest",
    description: "An interactive game introducing kids to various career paths through engaging mini-games.",
    image: "/images/careermini.jpg",
    achievements: [
      "1st Place Grand Prize Hackathon Winner at Boston Convention Center",
      "Competed against more than 250 teams from all Universities in the United States, including Ivy League institutions",
      "Developed a game that introduces kids to various career paths through many mini-games"
    ],
    technologies: ["React", "JavaScript", "Phaser.js", "CSS", "HTML", "Python", "GROQ"],
    github: "https://github.com/Opbabe/CareerQuest.io.git",
    view: "https://devpost.com/software/career-quest-9dicgs"
  },
  {
    title: "HuntDoor-IOS",
    description: "A campus navigation app for San Jose State University, combining classroom finding with gamification.",
    image: "/images/huntdoor.jpg",
    achievements: [
      "Developed a comprehensive navigation solution for SJSU students",
      "Implemented an engaging scavenger hunt feature to familiarize users with campus landmarks",
      "Integrated 3D/360-degree views for immersive campus exploration"
    ],
    technologies: ["Swift", "iOS", "Google Maps API", "3D Rendering", "Gamification"],
    github: "https://github.com/Opbabe/HuntDoor-IOS.git",
    view: "https://docs.google.com/presentation/d/1H1qraK_cRVs8OduVY4GrA2e49CNopapfis3oee1FoD0/edit?usp=sharing"
  },
  {
    title: "Grocery Gander",
    description: "A digital platform representing a virtual farmer's market with real-time product listings.",
    image: "/images/grocery-gander.jpg",
    achievements: [
      "Developed a comprehensive platform for managing and showcasing farmer's market products",
      "Implemented user experience dashboard for enhanced insights",
      "Created a robust reporting system for vendor analytics"
    ],
    technologies: ["Java", "JSP", "Servlets", "MySQL", "Tomcat", "HTML/CSS"],
    github: "https://github.com/Opbabe/GroceryFleam.com.git",
    view: "https://docs.google.com/document/d/1wWShWgJ1abFyZ89MQsB2nh5kkD-YKuS1g3F0xddqg3E/edit?usp=sharing"
  },
  {
    title: "Mancala Game",
    description: "A modern implementation of the classic Mancala board game with customizable styles and engaging gameplay.",
    image: "/images/mancala.jpg",
    achievements: [
      "Developed a fully functional Mancala game with customizable board styles",
      "Implemented undo functionality and adjustable starting stone numbers",
      "Created an intuitive user interface using Java Swing"
    ],
    technologies: ["Java", "Swing", "MVC Pattern", "Strategy Pattern"],
    github: "https://github.com/Opbabe/MancalaGame.git",
    view: "https://docs.google.com/document/d/1Cq-ON8Ta9ps0CY_mOdyuCLSNpUV_9Hl6AhJOfYpYH_I/edit?usp=sharing"
  },
  {
    title: "Shakespearean Chatbot",
    description: "An AI-powered chatbot that transforms modern English conversations into eloquent Shakespearean dialogue.",
    image: "/images/shakespeare-chatbot.jpg",
    achievements: [
      "Leveraged GPT-2 for next sentence prediction in conversations",
      "Fine-tuned T5 model for English to Shakespearean style transfer",
      "Developed an integrated training pipeline for data alignment and tokenization"
    ],
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "NLP", "Google Colab"],
    github: "https://github.com/Opbabe/ShakespeareChatbotAI.git",
    view: "#"
  },
  {
    title: "Ricard.io LLM",
    description: "An open-source code LLM generation system leveraging Tree of Thoughts (ToT) prompting technique to solve complex coding tasks.",
    image: "/images/richard-io.jpg",
    achievements: [
      "Winner at AI Hackathon in UC Berkeley",
      "Developed an open-source code LLM generation system using advanced prompting techniques",
      "Implemented complex coding task solutions using the BigCode benchmark"
    ],
    technologies: ["Python", "Hugging Face", "BigCode", "LargeLanguageModel", "GitHub", "Groq"],
    github: "https://github.com/Opbabe/Ricard.io.git",
    view: "https://devpost.com/software/ricard-io"
  }
]

export default function Projects({ id }: { id?: string }) {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id={id} className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-2">Portfolio</h2>
          <p className="text-xl text-muted-foreground">Most Recent Work</p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <button
            onClick={previousProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="overflow-hidden">
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                width={600}
                height={400}
                className="w-full h-[400px] object-contain bg-background p-2"
              />
            </Card>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                {projects[currentProject].title}
              </h3>
              
              <p className="text-muted-foreground">
                {projects[currentProject].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Achievements</h4>
                <ul className="space-y-2">
                  {projects[currentProject].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="mr-2 text-primary">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Built with</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild variant="outline" className="gap-2">
                  <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild className="gap-2">
                  <a href={projects[currentProject].view} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}




