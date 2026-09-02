import { about } from '../data/about'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

export function About() {
  return (
    <div>
      <SectionHeading eyebrow="About" title="A bit about me" />

      <div className="space-y-4 text-slate-700 dark:text-slate-300">
        {about.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {about.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
          Experience
        </h3>
        <div className="space-y-4">
          {about.timeline.map((item) => (
            <Card key={item.title + item.period}>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {item.period}
              </p>
              <h4 className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                {item.title} &middot; {item.org}
              </h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
