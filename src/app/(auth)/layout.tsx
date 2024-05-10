import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full bg-blue-100 flex items-center justify-center">{children}</main>
  )
}

export default Layout