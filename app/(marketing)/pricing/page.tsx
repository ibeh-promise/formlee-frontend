"use client";
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Badge } from '@/app/components/ui/Badge';

export default function PricingPage() { 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-3xl sm:text-5xl mb-4 font-extrabold text-zinc-950 tracking-tight">Simple Pricing</h1>
                <p className="text-lg text-gray-600">
                    Transparent, predictable plans with no hidden fees or surprise usage bills.
                </p>

                {/* Pricing component */}
                <div className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Free Plan */}
                        <div className="border rounded-lg p-6 shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Free</h2>
                            <p className="text-gray-600 mb-4">Basic features for personal use.</p>
                            <p className="text-2xl font-bold mb-4">$0/month</p>
                            <ul className="mb-4 text-gray-600">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
                        </div>

                        {/* Pro Plan */}
                        <div className="border rounded-lg p-6 shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Pro</h2>
                            <p className="text-gray-600 mb-4">Advanced features for professionals.</p>
                            <p className="text-2xl font-bold mb-4">$29/month</p>
                            <ul className="mb-4 text-gray-600">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                            </ul>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="border rounded-lg p-6 shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
                            <p className="text-gray-600 mb-4">Custom solutions for large organizations.</p>
                            <p className="text-2xl font-bold mb-4">Contact Us</p>
                            <ul className="mb-4 text-gray-600">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                                <li>Feature 5</li>
                            </ul>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }