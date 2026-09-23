'use client'
import {useEffect, useState} from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'md',
}) =>{
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
    };

    }, [isOpen, onClose])

    if (!isOpen) return null

    const maxWidthClass = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-2xl',
    }[maxWidth]
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto'>
            <div className='fixed inset-0 bg-zinc-950/40 backdrop-blur-xs transition-opacity' onClick={onClose}/>
            <div className={`relative w-full ${maxWidthClass} bg-white rounded-2xl border border-zinc-200/80 shadow-2xl overflow-hidden z-10 transition-all transform animate-in fade-in zoom-in-95 duration-150`}>
                <div className='flex items-start justify-between p-6 pb-4 border-b border-zinc-100'>
                    <div>
                        <h3 className='text-lg font-semibold text-zinc-900'>{title}</h3>
                        {description && (
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">{description}</p>
            )}
                    </div>
                    <button onClick={onClose} className='text-zinc-400 hover:text-zinc-600 p-1.5 rounded-lg hover:bg-zinc-100 transition-colors'>
                        <X className='w-4 h-4'/>
                    </button>
                </div>
                <div className='p-6'>{children}</div>
            </div>
        </div>
    )
}