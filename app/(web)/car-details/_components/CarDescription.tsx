'use client'

interface DescriptionFeature {
  title: string
  description: string
}

interface CarDescriptionProps {
  features: DescriptionFeature[]
}

export function CarDescription({ features }: CarDescriptionProps) {
  return (
    <div className="w-full space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Car Description</h2>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 md:gap-6">
           
            <div className="flex-1">
              <h3 className="text-base md:text-[24px] font-bold text-[#4A4A4A] mb-2">
                {feature.title}:
              </h3>
              <p className="text-sm md:text-xl text-[#4A4A4A] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
