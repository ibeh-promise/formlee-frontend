"use client"


import { User2Icon } from 'lucide-react'
import React from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';

const SettingsPage = () => {
  return (
    <>
        <div className="flex flex-col w-full items-start justify-center">
            <div className='flex flex-col w-full items-start justify-center'>
                <h1 className='font-bold text-[40px] text-black'>Account Settings</h1>
                 <p className='text-[18px] text-gray-500'>Manage your personal profile, notification preferences, and API credentials.</p>
            </div>

            <div className='w-full mt-3 border-1 border-gray-300 bg-white rounded-[15px] h-[270px]'>
                <div className='flex w-full px-7 gap-2 my-7'>
                    <div className='bg-purple-50 rounded-md h-[40px] w-[40px] flex justify-center items-center'>
                    <User2Icon className='h-[20px] w-[20px]'/>

                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <h2 className='font-bold text-[16px]'>Profile Information</h2>
                        <p className='text-gray-500'>Update your account name and primary email.</p>
                    </div>
                </div>
                        <form className='flex items-center justify-start mx-7 gap-7'>
            <div className='w-full space-y-2'>
            `   <Label htmlFor="fullname" className='font-bold'>FULL NAME</Label>
                <InputGroup>
                <InputGroupInput
                placeholder='enter your name'
                type='text'

                />
                </InputGroup>
            </div>
            
            <div className='w-full '>
            `   <Label htmlFor="email" className='font-bold'>EMAIL ADDRESS</Label>
                <InputGroup>
                <InputGroupInput
                placeholder='enter your email'
                type='email'

                />
                </InputGroup>
            </div>
  
            </form>
            <div className='w-full flex justify-end items-center mx-7 spac-y-2'>
                <Button>Save Profile</Button>
            </div>

            </div>
            
        
        </div>
    </>
  )
}

export default SettingsPage


    //   <div className="w-full space-y-2">
    //       <Label htmlFor="email">EMAIL ADDRESS</Label>
    //       <InputGroup>
    //         <InputGroupInput
    //           placeholder="name@example.com"
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //         <InputGroupAddon>
    //           <Mail />
    //         </InputGroupAddon>
    //       </InputGroup>
    //     </div>