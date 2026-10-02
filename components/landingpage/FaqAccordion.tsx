"use client"

import React from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"

interface FaqAccordionItems {
  id: number,
  title: string,
  question: string,
  answer: string 
}

interface FaqItems {
  Items: FaqAccordionItems[]
}


const FaqAccordion = ({Items}: FaqItems) => {
  return (
    <>
    <Accordion type="single" collapsible className="w-full bg-white rounded-[20px] border-2 border-zinc-100 px-7 py-6">
      {Items.map((item) => (
        <AccordionItem key={item.id} value={String(item.id)} className="">
            <p className="mb">
              {item.title}
            </p>

          <AccordionTrigger className="hover:no-underline">
            {item.question}
          </AccordionTrigger>

          <AccordionContent>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))

      }
    </Accordion>
    </>
  )
}

export default FaqAccordion