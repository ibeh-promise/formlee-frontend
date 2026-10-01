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
import { AlertTriangle, TriangleAlert } from "lucide-react";
import { Copy, RefreshCw } from "lucide-react";


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


            <div className='w-full mt-3 border-gray-500 bg-white rounded-[15px] h-[250px] flex flex-col justify-center items-center '>
                <div className='flex gap-3 w-[94%] items-start justify-start px-7 border-b pb-4 border-gray-200'>
                    <div className="flex justify-center items-center bg-purple-50 h-[40px] w-[40px] rounded-md">
                    <KeyIcon className='h-[20px] w-[20px]'/>
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <h2 className='font-bold text-[18px]'>Developer API Key</h2>
                    <p className='text-gray-500 text-[15px]'> Use this secret key to authenticate REST API requests.</p>
                </div>
                </div>
                 <div className="flex justify-between items-center w-full px-7 mt-5">
                    <div tabIndex={0} className='flex justify-start items-center w-[700px] py-2 px-3 rounded-[9px] focus:border-black focus-outline-none border-2 bg-gray-100'>
                        <p className="text-gray-500">fl_live_u9sb1r0ktdf909n9</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Button variant={"secondary"} className="h-12">
                            <Copy /> Copy Key
                        </Button>
                         <Button className="bg-white border border-gray-300 text-black hover:bg-gray-100 h-12">
                            <RefreshCw /> Rotate
                        </Button>
                    </div>
                </div>
                    <div className="w-full flex justify-start items-center px-7 mt-3">
                        <p className="text-gray-500 text-[12px]">Keep this key confidential. Never expose it in client-side public bundles.</p>
                    </div>
            </div>

            <div className='w-full mt-3 border-2 border-red-100 bg-red-50 rounded-[15px] h-[250px] flex flex-col justify-start '>
                <div className='flex gap-3 items-center justify-start px-7 mt-7'>
                    <div className="flex justify-center items-center bg-red-100 h-[40px] w-[40px] rounded-md">
                        <TriangleAlert className='h-[20px] w-[20px] text-red-400'/>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="font-bold text-[18px]">Danger Zone</h2>
                        <p className="text-red-500 text-[15px]">Irreversible actions regarding your account and endpoints.</p>
                    </div>
                </div>
            </div>
            
        
        </div>
    </>
  )
}

export default SettingsPage

