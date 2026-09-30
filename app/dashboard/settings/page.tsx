"use client"


import { User2Icon } from 'lucide-react'
import React from 'react'

const SettingsPage = () => {
  return (
    <>
        <div className="flex flex-col w-full items-start justify-center">
            <div className='flex flex-col w-full items-start justify-center'>
                <h1 className='font-bold text-[40px] text-black'>Account Settings</h1>
                 <p className='text-[18px] text-gray-500'>Manage your personal profile, notification preferences, and API credentials.</p>
            </div>

            <div className='w-full mt-3 border-1 border-gray-300 bg-white rounded-[15px] h-[300px]'>
                <div className='flex w-full px-7 gap-2 my-7'>
                    <div className='bg-purple-50 rounded-md h-[40px] w-[40px] flex justify-center items-center'>
                    <User2Icon className='h-[20px] w-[20px]'/>

                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <h2 className='font-bold text-[16px]'>Profile Information</h2>
                        <p className='text-gray-500'>Update your account name and primary email.</p>
                    </div>
                </div>
            </div>
            
            <form>
            <div className='flex items-center justify-start gap-3'>
                <div>
                    <label htmlFor=""></label>
                </div>
            </div>


            </form>
        </div>
    </>
  )
}

export default SettingsPage