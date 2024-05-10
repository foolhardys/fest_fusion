import Navbar from '@/components/shared/Navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full bg-blue-100">
      <Navbar/>
      {children}
    </main>
  )
}

export default Layout