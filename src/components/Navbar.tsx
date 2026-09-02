import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { useTheme } from '../hooks/useTheme'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-indigo-600 dark:text-indigo-400'
        : 'text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {siteConfig.name}
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClasses} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800">
          <div className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkClasses}
                end={item.path === '/'}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
