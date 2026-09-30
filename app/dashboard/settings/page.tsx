"use client"


import { Bell, KeyIcon, User2Icon } from 'lucide-react'
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
        <div className="flex flex-col w-full items-start justify-center gap-3">
            <div className='flex flex-col w-full items-start justify-center'>
                <h1 className='font-bold text-[40px] text-black'>Account Settings</h1>
                 <p className='text-[18px] text-gray-500'>Manage your personal profile, notification preferences, and API credentials.</p>
            </div>

            <div className='w-full mt-3 border-1 border-gray-300 bg-white rounded-[15px] h-[270px]'>
                <div className='flex w-full px-7 gap-2 my-8'>
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
            
            <div className='w-full space-y-2'>
            `   <Label htmlFor="email" className='font-bold'>EMAIL ADDRESS</Label>
                <InputGroup>
                <InputGroupInput
                placeholder='enter your email'
                type='email'

                />
                </InputGroup>
            </div>
  
            </form>
            <div className='w-full flex justify-end items-center px-7 mt-7'>
                <Button className="text-[15px] font-bold">Save Profile</Button>
            </div>

            </div>

            <div className='w-full mt-3 border-gray-500 bg-white rounded-[15px] h-[350px] flex flex-col justify-start items-center'>
                <div className='flex w-[94%] gap-2 my-7 border-b-1 border-gray-100'>
                    <div className='bg-purple-50 rounded-md h-[40px] w-[40px] flex justify-center items-center'>
                        <Bell className="h-[20px] w-[20px]"/>
                    </div>
                    <div className='flex flex-col items-start justify-center my-2'>
                        <h2 className='font-bold text-[18px]'>Email Notification</h2>
                        <p className='text-gray-500'>Choose what events you receive email updates for.</p>
                    </div>
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-4 '>
                        <div className='w-[94%] py-3 rounded-[10px] px-7 flex justify-between items-center bg-purple-50'>
                         
                        <div className='flex flex-col items-start justify-center my-2'>
                            <h2 className='font-bold text-[15px]'>Instants Submission Alerts</h2>
                            <p className='text-gray-500'>Receive an immediate notification whenever any form endpoint receives valid data.</p>
                        </div>
                           <div className='flex justify-center items-center'>
                            <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer'/>
                        </div>
                        </div>
                        <div className="w-[94%] py-3 rounded-[10px] px-7 flex justify-between items-center bg-purple-50">
                                <div className='flex flex-col items-start justify-center my-2'>
                                    <h2 className='font-bold text-[15px]'>Weekly Digest & Analytics</h2>
                                    <p className='text-gray-500'>Receive a Monday morning breakdown of submission traffic and conversion metrics.</p>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                                </div>
                        </div>
                </div>
            </div>


            <div className='w-full mt-3 border-gray-500 bg-white rounded-[15px] h-[250px] flex flex-col justify-start '>
                <div className='flex gap-3 items-center justify-start px-7 mt-7'>
                    <div className="flex justify-center items-center bg-purple-50 h-[40px] w-[40px] rounded-md">
                    <KeyIcon className='h-[20px] w-[20px]'/>
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <h2 className='font-bold text-[15px]'>Developer API Key</h2>
                    <p> Use this secret key to authenticate REST API requests.</p>
                </div>
                </div>
            </div>
            
        
        </div>
    </>
  )
}

export default SettingsPage

