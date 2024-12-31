import { Calendar, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    company: "Warp",
    position: "Data Engineering Internship",
    date: "June 2024 - September 2024",
    location: "Los Angeles, CA",
    type: "Hybrid",
    achievements: [
      "Secured $20 million funding from Angel investors within 3 months.",
      "Coded logistics algorithms using JavaScript, NoSQL, and Linux.",
      "Python automation saving $500k annually.",
      "Designed ETL pipelines with Google Cloud Storage.",
    ],
  },
  {
    company: "Apple",
    position: "Technical Data Staff",
    date: "Oct 2023 - May 2024",
    location: "Cupertino, CA",
    type: "Onsite",
    achievements: [
      "iOS Support and Troubleshooting.",
      "GitHub repository management.",
      "VisionPro project contributions.",
    ],
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-center mb-16">
          <span className="block text-3xl font-bold text-foreground mb-2">Experience</span>
          <span className="block text-xl text-muted-foreground">My professional journey in the tech industry</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{experience.company}</CardTitle>
                <p className="text-xl font-medium text-muted-foreground">{experience.position}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <Badge>{experience.type}</Badge>
                <ul className="space-y-2 text-muted-foreground">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

