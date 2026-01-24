'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CardContent } from '@/components/ui/card'

const faqData = [
  {
    id: '1',
    question: 'When will the first edition be released?',
    answer:
      'The first edition is in preparation. Interested parties can pre-order now and will receive a notification as soon as the edition is available.',
  },
  {
    id: '2',
    question: 'How will the letters be delivered?',
    answer:
      'Letters will be delivered via standard postal service to your provided address within 5-7 business days.',
  },
  {
    id: '3',
    question: 'Is ZEITDOSE limited?',
    answer:
      'Yes, ZEITDOSE is a limited edition product with a finite number of units available for this release.',
  },
  {
    id: '4',
    question: 'Can I gift ZEITDOSE?',
    answer:
      'Absolutely! ZEITDOSE makes an excellent gift. You can purchase it for yourself or someone special.',
  },
  {
    id: '5',
    question: 'What kind of data do I receive?',
    answer:
      'You receive comprehensive data including current conditions, forecasts, and personalized insights for your location.',
  },
  {
    id: '6',
    question: 'Will there be more editions?',
    answer:
      'Yes, we are planning future editions based on customer feedback. Stay tuned for announcements!',
  },
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string>('1')

  return (
    <section className="py-10 md:py-16 lg:px-8">
      <div className="container mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14 pt-10 md:pt-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Find quick answers to the most common questions about ZEITDOSE.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="">
          <CardContent className="pt-4 md:pt-6">
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="w-full space-y-2"
            >
              {faqData.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-none"
                >
                  <AccordionTrigger
                    className="
                      py-4 md:py-5
                      px-3 md:px-4
                      bg-[#14406E]
                      rounded-xl
                      hover:no-underline
                      text-white
                      text-sm md:text-lg
                    "
                  >
                    <div className="flex items-start md:items-center gap-3 md:gap-4 font-medium text-left">
                      <span
                        className="
                          flex-shrink-0
                          w-6 h-6 md:w-8 md:h-8
                          rounded-full
                          bg-white
                          text-black
                          flex items-center justify-center
                          font-bold
                          text-xs md:text-sm
                        "
                      >
                        {item.id}
                      </span>
                      <span className="leading-snug md:leading-normal">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                      px-4
                      pt-3
                      pb-5
                      bg-[#EEEEEE]
                      text-[#3B3939]
                      text-xs md:text-base
                      leading-relaxed
                      rounded-b-xl
                    "
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </div>
      </div>
    </section>
  )
}
