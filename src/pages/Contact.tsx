import { Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons'

export function Contact() {
  return (
    <div>
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        description="Feel free to reach out through any of the channels below."
      />

      <Card className="max-w-md">
        <ul className="space-y-4">
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <Mail size={18} /> {siteConfig.email}
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <GithubIcon width={18} height={18} /> GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <LinkedinIcon width={18} height={18} /> LinkedIn
            </a>
          </li>
        </ul>
      </Card>
    </div>
  )
}
