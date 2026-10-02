import { CircleAlert } from 'lucide-react'
import React from 'react'

const FaqPage = () => {
  return (
    <section className='relative pt-12 pb-20 sm:pt-20 sm:pb-20 overflow-hidden'>
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'/>

     <div className='max-w-4xl mx-auto px-4 sm-px-6 text-center'>
         <div className='inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200'>
          <span>
            <CircleAlert className='h-4 w-4'/>
          </span>
          <span className=''>Knowledge Base & Technical FAQs</span>
        </div>

          <h1 className='text-4xl sm:text-6xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-6'>
            Frequently Asked Questions
          </h1>

          <p className='text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal'>
            Everything you need to knoe about Formlee enpoints, Nextjs
          </p>
     </div>
    </section>
  )
}

export default FaqPage