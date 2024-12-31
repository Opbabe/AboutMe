import React from 'react'
import { Code, Library, PenToolIcon as Tool } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface SkillsProps {
  id: string;
}

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Golang", level: 75 },
      { name: "Java", level: 80 },
      { name: "Swift", level: 70 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frameworks/Libraries",
    icon: <Library className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Flask", level: 80 },
      { name: "FastAPI", level: 75 },
    ],
  },
  {
    title: "Developer Tools",
    icon: <Tool className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "GCP", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 90 },
    ],
  },
]

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  {React.cloneElement(category.icon, { className: "h-6 w-6 text-primary" })}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

