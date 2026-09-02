export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}
