import { EnvelopeIcon } from '@heroicons/react/24/outline'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div>
            <h1 className='text-center'>Sign in</h1>
            <p className='text-xs max-w-sm'>Get started on your journey to meaningful 
            connections by creating your Flirt Fever account.</p>
            <div>
                <div className='p-2 border-2 border-gray-500 rounded-full flex items-center space-x-2'>
                    <EnvelopeIcon className='icon'/>
                    <input type="text" placeholder='Enter your email' className='outline-none w-full bg-transparent'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page