import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live?: string
  achievement: string
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  live,
  achievement,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:translate-y-[-5px]">
      <Image src={image} alt={title} width={600} height={300} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{achievement}</p>
        <div className="flex space-x-2">
          <Button asChild variant="outline" size="sm">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2" /> GitHub
            </a>
          </Button>
          {live && (
            <Button asChild variant="outline" size="sm">
              <a href={live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

