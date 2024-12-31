import React from 'react'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Contact({ id }: { id?: string }) {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-center mb-16">
          <span className="block text-4xl font-bold text-foreground mb-2">Contact</span>
          <span className="text-xl text-muted-foreground">Let's connect and discuss your next project</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <a 
                href="mailto:nicktran900@gmail.com" 
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                nicktran900@gmail.com
              </a>
              <a 
                href="tel:626-620-9954" 
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                (626) 620-9954
              </a>
              <a 
                href="https://linkedin.com/in/nick-tran-2534a0223" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/nicktran" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <Input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-background border-input"
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-background border-input"
                />
                <Textarea 
                  placeholder="Message" 
                  rows={6}
                  className="bg-background border-input"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

