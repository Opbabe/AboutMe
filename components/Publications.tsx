"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FileText, ExternalLink, Users, Calendar, MapPin, Presentation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PublicationsProps {
  id: string;
}

const publication = {
  title: "Towards Extended Reality Intelligence for Monitoring and Predicting Patient Readmission Risks",
  authors: ["Martin Sanchez", "Nick Tran", "Vuthea Chheang"],
  venue: "arXiv",
  conference: "XR Health Workshop, IEEE VR 2026",
  location: "Daegu, Korea",
  date: "March 20, 2026",
  citation: "arXiv:2603.20556",
  doi: "10.48550/arXiv.2603.20556",
  subjects: ["Human-Computer Interaction (cs.HC)", "Graphics (cs.GR)"],
  status: "Published",
  image: "/images/publication-vr.png",
  paperUrl: "https://arxiv.org/abs/2603.20556",
  presentationUrl: "https://docs.google.com/presentation/d/1qSJaoMXP8pGr3sAxEQ3sddJHsu5RJfizeX-hullC6D8/edit?usp=sharing",
  abstract: "This research explores the integration of extended reality technologies with artificial intelligence for real-time monitoring and prediction of patient readmission risks in healthcare settings. Built for Apple Vision Pro, the system provides immersive visualization of patient data and clinical decision support."
}

const Publications: React.FC<PublicationsProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">Research Publication</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Publications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contributing to the future of healthcare through XR and AI research.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative gradient blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 z-10" />
                  <Image
                    src={publication.image}
                    alt={publication.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
                  />
                  {/* Overlay with status badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 px-3 py-1">
                      {publication.status}
                    </Badge>
                  </div>
                  {/* Conference badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-md rounded-xl p-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                        <MapPin className="h-4 w-4 text-emerald-400" />
                        <span>{publication.conference}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{publication.location} | {publication.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      {publication.title}
                    </h3>

                    {/* Authors */}
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="flex flex-wrap gap-2">
                        {publication.authors.map((author, index) => (
                          <span 
                            key={author}
                            className={`text-sm ${author === "Nick Tran" ? "font-semibold text-primary" : "text-muted-foreground"}`}
                          >
                            {author}{index < publication.authors.length - 1 ? "," : ""}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Abstract */}
                    <p className="text-muted-foreground leading-relaxed">
                      {publication.abstract}
                    </p>

                    {/* Subjects */}
                    <div className="flex flex-wrap gap-2">
                      {publication.subjects.map((subject) => (
                        <Badge 
                          key={subject} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>

                    {/* Citation */}
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Citation</p>
                      <code className="text-sm font-mono text-foreground">{publication.citation}</code>
                      <p className="text-xs text-muted-foreground mt-2">DOI: {publication.doi}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button asChild className="gap-2">
                        <a href={publication.paperUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" />
                          View Paper
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="gap-2">
                        <a href={publication.presentationUrl} target="_blank" rel="noopener noreferrer">
                          <Presentation className="h-4 w-4" />
                          View Demo
                        </a>
                      </Button>
                      <Button asChild variant="ghost" className="gap-2">
                        <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          DOI Link
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Publications
