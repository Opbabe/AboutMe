import React from 'react'
import { Calendar, MapPin } from 'lucide-react'

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const experiences = [
    {
      company: "San José State University",
      position: "Undergraduate Research Assistant",
      date: "Nov 2025 - April 2025",
      location: "San Jose, CA",
      type: "Onsite",
      achievements: [
        "Conducted augmented reality research under Dr. Vuthea Chheang on hospital risk analysis and clinical decision support.",
        "Programmed the entire immersive tool to visualize patient data and readmission risk on Apple Vision Pro.",
        "Contributed to nomination for IEEE VR 2026, Daegu, Korea presentation.",
      ],
    },
    {
      company: "Lam Research",
      position: "VR/AR Engineering Intern",
      date: "May 2025 - Nov 2025",
      location: "Fremont, CA",
      type: "Onsite",
      achievements: [
        "Development of MR and AR special projects for Customer Support Business Group, Technical Training.",
        "Hands-on designing of Etch Equipment Semiconductor Prototype and Animation using VisRen and Unity.",
        "Created VR-ready models and reusable VR-specific code from BKM.",
      ],
    },
    {
      company: "Warp",
      position: "Data Engineering Intern",
      date: "June 2024 - September 2024",
      location: "Los Angeles, CA",
      type: "Hybrid",
      achievements: [
        "Secured $20 million funding from Angel investors within 3 months.",
        "Python automation to optimize data workflows, saving the company $500k annually.",
        "Designed ETL pipelines with Google Cloud Storage, BigQuery, and Python, automating data ingestion and reporting workflows.",
      ],
    },
    {
      company: "Apple",
      position: "Technical Virtual Reality Intern",
      date: "Oct 2023 - May 2024",
      location: "Cupertino, CA",
      type: "Onsite",
      achievements: [
        "VisionPro Support and Troubleshooting, providing technical support for iOS devices.",
        "Contributed to GitHub repositories and collaborated on solutions for device memory management and power optimization.",
        "Assisted in the VisionPro project, focusing on hardware integration and high-performance UI improvements.",
      ],
    },
  ]

  return (
    <section id={id} className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-4xl font-bold text-zinc-900">Experience</h2>
          <p className="text-lg text-zinc-600">My professional journey in the tech industry</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-400/50 via-amber-300/30 to-amber-200/20 transform -translate-x-1/2" />
          
          <div className="space-y-48">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative ${
                  index % 2 === 0 
                    ? 'md:pr-[60%] md:text-right' 
                    : 'md:pl-[60%] md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-amber-400 border-4 border-white shadow-md" />
                </div>
                
                {/* Content card */}
                <div className="bg-[#1a1f2e] rounded-2xl p-8 shadow-xl relative mx-4 md:mx-0">
                  <h3 className="text-amber-400 text-2xl font-semibold mb-2">
                    {experience.company}
                  </h3>
                  <h4 className="text-white text-xl mb-6">
                    {experience.position}
                  </h4>
                  
                  <div className="flex items-center gap-6 text-sm text-zinc-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#2a2f3e] text-zinc-300 mb-8">
                    {experience.type}
                  </div>
                  
                  <ul className="space-y-4 text-zinc-300">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-amber-400 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

