import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

export function Projects() {
  return (
    <div>
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="A selection of things I've built."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} to={`/projects/${project.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
