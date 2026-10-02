import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { CircleAlert, FileText, Mail, Search, SquareStack, ShieldCheck, UploadIcon, Phone, Shield } from 'lucide-react'
import React from 'react'

const FaqPage = () => {
  return (
    <section className='relative pt-12 pb-20 sm:pt-20 sm:pb-20 overflow-hidden'>
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'/>

     <div className='max-w-4xl mx-auto px-4 sm-px-6 text-center flex justify-center flex-col items-center'>
         <div className='inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200'>
          <span>
            <CircleAlert className='h-4 w-4'/>
          </span>
          <span className=''>Knowledge Base & Technical FAQs</span>
        </div>

          <h1 className='text-4xl sm:text-6xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-6'>
            Frequently Asked Questions
          </h1>

          <p className='text-lg sm:text-xl text-zinc-600 max-w-4xl mx-auto mb-10 leading-relaxed font-normal'>
            Everything you need to know about Formlee enpoints, Next.js integration, emails delivery <br /> speeds, spam mitigation, and API webhooks.
          </p>

        <div className="flex items-center rounded-xl border-2 border-gray-200 w-[80%] bg-white p-2 shadow-sm focus-within:border-black">
  <InputGroup
    className="
      w-[90%]
      !border-none
      !shadow-none
      !ring-0
      focus-within:!border-none
      focus-within:!shadow-none
      focus-within:!ring-0
    "
  >
    <InputGroupInput
      placeholder="Search questions (e.g. Next.js, CORS, spam honeypot, DKIM, attach"
      className="
        !border-none
        !outline-none
        !shadow-none
        !ring-0
        focus:!border-none
        focus:!outline-none
        focus:!shadow-none
        focus:!ring-0
        focus-visible:!border-none
        focus-visible:!outline-none
        focus-visible:!shadow-none
        focus-visible:!ring-0
      "
    />

    <InputGroupAddon className="!border-none !shadow-none">
      <Search />
    </InputGroupAddon>
  </InputGroup>
</div>
     </div>
     <div className='border-t-1 mt-7 border-zinc-200 mx-5'/>

     <div className='flex flex-col my-7 items-center justify-center'>
      <div className='flex justify-between items-center w-full px-5'>
        <span className='text-zinc-900 text-xs'>BROWSE BY TOPIC</span>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-zinc-700 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span>Expand all</span>
          <span className="flex h-1.5 w-1.5 rounded-full bg-zinc-300"/>
          <span>Collapse all</span>
        </div>
      </div>

        <div className="w-full border-t mt-1 border-zinc-200"/>


        <div className="flex items-center gap-3 max-w-[90%] mt-5 overflow-x-auto flex-nowrap scrollbar-none">
          <Button className='gap-2'>
            <CircleAlert className="h-2 w-2"/>
            <span>All Questions</span>
            <span>37</span>
          </Button>
          <Button className="bg-white border-2 border-zinc-200 text-black hover:bg-zinc-200/80 gap-2">
            <SquareStack/>
            <span>General & Architecture</span>
            <span className='bg-zinc-200/80 rounded-full w-5'>4</span>
          </Button>
          <Button className="bg-white border-2 border-zinc-200 text-black hover:bg-zinc-200/80 gap-2">
            <FileText/>
            <span>Next.js & Frontend</span>
            <span className='bg-zinc-200/80 rounded-full w-5'>4</span>
          </Button>
          <Button className="bg-white border-2 border-zinc-200 text-black hover:bg-zinc-200/80 gap-2">
            <Mail/>
            <span>Email delivery & Routing</span>
            <span className="bg-zinc-200/80 rounded-full w-5">4</span>
          </Button>
          <Button className="bg-white border-2 border-zinc-200 text-black hover:bg-zinc-200/80 gap-2">
            <ShieldCheck/>
            <span>Spam Mitigation & Security</span>
            <span className="bg-zinc-200/80 rounded-full w-5">3</span>
          </Button>
          <Button className="bg-white border-2 border-zinc-200 text-black hover:bg-zinc-200/80 gap-2">
            <UploadIcon/>
            <span>File Uploads & Media</span>
            <span className='bg-zinc-200/80 rounded-full w-5'>2</span>
          </Button>
          <Button className="bg-white border-2 border-zinc-200 text-black hover:bg-zinc-200/80 gap-2">
            <Phone/>
            <span>webhook & integration</span>
            <span className='bg-zinc-200/80 rounded-full w-5'>2</span>
          </Button>
          <Button className="bg-white border-2 border-zinc-200 text-black hover:bg-zinc-200/80 gap-2">
            <Shield/>
            <span>GDPR,Privacy & HIPAA</span>
            <span className="bg-zinc-200/80 rounded-full w-5">4</span>
          </Button>
          <Button className="bg-white border-2 border-zinc-200 text-black hover:bg-zinc-200/80 gap-2">
            <CircleAlert/>
            <span>Troubleshooting & CORS</span>
            <span className='bg-zinc-200/80 rounded-full w-5'>2</span>
          </Button>
        </div>

     </div>

    </section>
  )
}

export default FaqPage