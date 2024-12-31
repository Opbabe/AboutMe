import React from 'react'
import { GraduationCap, Users } from 'lucide-react'

const courses = [
  'Fullstack',
  'Data Structures and Algorithms',
  'Object Oriented Design Patterns',
  'Software Engineering',
  'Database Management Systems',
  'Computer Networks',
  'Information Security',
  'Data Science',
  'Machine Learning'
]

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-2">My Education</h2>
          <p className="text-xl text-emerald-600">Learn more about my background and education</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {/* University Section */}
          <div className="flex items-start gap-6 mb-12">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">San Jose State University</h3>
              <p className="text-lg text-emerald-600 mb-4">B.S. Computer Science with minor in Data Science</p>
              <div className="space-y-1 text-zinc-600">
                <p>Graduation: June 2026</p>
                <p>GPA: 3.5</p>
              </div>
            </div>
          </div>

          {/* Organizations Section */}
          <div className="flex items-start gap-6 mb-12">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <Users className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">Organizations</h3>
              <p className="text-zinc-600">Society of Asian Scientists and Engineering</p>
            </div>
          </div>

          {/* Relevant Coursework Section */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Relevant Coursework</h3>
            <div className="flex flex-wrap gap-3">
              {courses.map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

