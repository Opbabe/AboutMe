'use client'

import React from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { smoothScroll } from '@/utils/smoothScroll'

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    smoothScroll(id)
  }

  
  return (
    <section id={id} className="hero-section">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">Nick Tran</h1>
              <h2 className="text-3xl md:text-4xl font-normal text-emerald-600">Software Engineer & Data Scientist</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Multi-faceted software engineer with a passion for learning and building meaningful connections. Currently seeking a dynamic summer internship.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg">
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
                  View Projects
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Opbabe" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" strokeWidth={1.5} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nick-tran-2534a0223" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" strokeWidth={1.5} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:nicktran900@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-6 w-6" strokeWidth={1.5} />
                <span className="sr-only">Email</span>
              </a>
              <a href="tel:626-620-9954" className="text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-6 w-6" strokeWidth={1.5} />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>

          {/* Right content - Profile Picture */}
          <div className="flex justify-center md:justify-end">
            <div className="relative aspect-square w-72 md:w-96">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-600 overflow-hidden">
                <Image
                  src="/images/Headshot.jpg"
                  alt="Nick Tran"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero




