"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, ExternalLink, Users, Calendar, MapPin, Presentation, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PublicationsProps {
  id: string;
}

const publicationImages = [
  { src: "/images/publication-vr.png", alt: "Main Dashboard - Patient risk overview with clinical drivers" },
  { src: "/images/publication-dashboard.png", alt: "Patient List & Analytics - Intake/Outtake tracking" },
  { src: "/images/publication-setup.png", alt: "AR-Admission Setup - Device configuration" },
  { src: "/images/publication-guide.png", alt: "Quick Start Guide - User onboarding flow" },
]

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
  paperUrl: "https://arxiv.org/abs/2603.20556",
  presentationUrl: "https://docs.google.com/presentation/d/1qSJaoMXP8pGr3sAxEQ3sddJHsu5RJfizeX-hullC6D8/edit?usp=sharing",
  abstract: "This research explores the integration of extended reality technologies with artificial intelligence for real-time monitoring and prediction of patient readmission risks in healthcare settings. Built for Apple Vision Pro, the system provides immersive visualization of patient data and clinical decision support."
}

const Publications: React.FC<PublicationsProps> = ({ id }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % publicationImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + publicationImages.length) % publicationImages.length)
  }

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
                {/* Image Gallery Section */}
                <div className="relative group bg-muted/30">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[600px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={publicationImages[currentImageIndex].src}
                          alt={publicationImages[currentImageIndex].alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                      {publicationImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex 
                              ? 'bg-white w-6' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 px-3 py-1">
                        {publication.status}
                      </Badge>
                    </div>

                    {/* Conference badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-black/60 backdrop-blur-md rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2 text-white/90 text-xs">
                          <MapPin className="h-3 w-3 text-emerald-400" />
                          <span>{publication.conference}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail strip */}
                  <div className="absolute bottom-16 left-4 right-4 z-20">
                    <div className="flex gap-2 justify-center">
                      {publicationImages.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex 
                              ? 'border-white shadow-lg scale-105' 
                              : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </button>
                      ))}
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

                    {/* Conference info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{publication.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{publication.location}</span>
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
