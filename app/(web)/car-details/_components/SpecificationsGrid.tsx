'use client'

interface Specification {
  label: string
  value: string
}

interface SpecificationsGridProps {
  specifications: Specification[]
}

export function SpecificationsGrid({ specifications }: SpecificationsGridProps) {
  return (
    <div className="w-full space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Specifications</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
        {specifications.map((spec, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-4 md:p-5 text-center hover:bg-muted/50 transition-colors"
          >
            <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide mb-2">
              {spec.label}
            </p>
            <p className="text-lg md:text-xl font-bold text-foreground break-words">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
