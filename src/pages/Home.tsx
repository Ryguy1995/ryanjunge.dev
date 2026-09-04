import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { projects } from '../data/projects'
import { buttonClassName } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/SectionHeading'
import headshot from '../assets/Headshot.jpg'

export function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="py-16 text-center"
      >
        
        <img 
            src={headshot}
            className="mx-auto mb-4 w-32 h-32 rounded-full"
        ></img>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-sky-900 sm:text-5xl dark:text-sky-100">
          Hi, I'm {siteConfig.name}
        </h1>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
          {siteConfig.role}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-lg text-sky-500 dark:text-sky-200">
          {siteConfig.tagline}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/projects" className={buttonClassName()}>
            View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>

      <section className="py-12">
        <SectionHeading eyebrow="Featured" title="Recent Projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link to={`/projects/${project.slug}`}>
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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
