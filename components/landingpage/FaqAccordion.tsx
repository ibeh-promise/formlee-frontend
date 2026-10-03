"use client"

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqAccordionItems {
  id: number
  title: string
  question: string
  answer: string 
}

interface FaqItems {
  Items: FaqAccordionItems[]
}

const FaqAccordion = ({ Items }: FaqItems) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {Items.map((item) => (
        <AccordionItem 
          key={item.id} 
          value={String(item.id)} 
          className="bg-white rounded-[20px] border-2 border-zinc-200/80 px-7 py-5 border-b-0"
        >
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            {item.title}
          </p>

          <AccordionTrigger className="hover:no-underline text-[20px] font-bold py-2 [&>svg]:w-9 [&>svg]:h-9 [&>svg]:bg-zinc-100 [&>svg]:rounded-full [&>svg]:p-1.5">
            {item.question}
          </AccordionTrigger>

          <AccordionContent className="text-zinc-500 text-[15px] pt-2">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqAccordion