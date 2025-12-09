import Navbar from '@/app/components/shared/Navbar'
import React from 'react'

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className=' flex flex-col items-center'>
        {children}
      </div>
    </div>
  )
}
