import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-sky-50 dark:bg-sky-900">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
