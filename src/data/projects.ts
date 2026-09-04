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
    slug: 'Senior Project',
    title: 'Senior Project',
    description: 'My thesis submitted for my senior project at California State University, Dominguez Hills.',
    longDescription:
      'This project is a demonstration of a ground-up approach to designing and imlementing a "Deep Learning" model to solve a specific problem. This demonstration is within the scope of audio recognition applied to the automotive diagnostic domain.',
    tech: ['NumPy', 'Pandas', 'Pytorch', 'Torchaudio', 'Python',],
    liveUrl: 'https://github.com/Ryguy1995/SeniorProjectSpring2024/blob/0d1af7209e04f928c0cebe7e1f081227b8b0d9b1/Final_doc.pdf',
    repoUrl: 'https://github.com/Ryguy1995/SeniorProjectSpring2024',
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
