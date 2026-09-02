import { Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { GithubIcon, LinkedinIcon } from './ui/Icons'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex items-center gap-4">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon width={18} height={18} className="hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon width={18} height={18} className="hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email">
            <Mail size={18} className="hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
        </div>
      </div>
    </footer>
  )
}
