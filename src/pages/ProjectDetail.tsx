import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import { Badge } from '../components/ui/Badge'
import { buttonClassName } from '../components/ui/Button'
import { GithubIcon } from '../components/ui/Icons'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div>
      <Link
        to="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <p className="mt-6 text-slate-700 dark:text-slate-300">
        {project.longDescription}
      </p>

      <div className="mt-8 flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonClassName('primary')}
          >
            Live Site <ExternalLink size={16} />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonClassName('secondary')}
          >
            Source <GithubIcon width={16} height={16} />
          </a>
        )}
      </div>
    </div>
  )
}
