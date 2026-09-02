export type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'sample-project-one',
    title: 'Sample Project One',
    description: 'A short one-line summary of what this project does.',
    longDescription:
      'A more detailed explanation of the problem this project solves, the approach taken, and any interesting technical challenges along the way.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/ryanjunge/sample-project-one',
    featured: true,
  },
  {
    slug: 'sample-project-two',
    title: 'Sample Project Two',
    description: 'Another short one-line project summary.',
    longDescription:
      'Detailed write-up of the second project, its goals, tech stack, and outcome.',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    repoUrl: 'https://github.com/ryanjunge/sample-project-two',
    featured: true,
  },
]
