"use client"
import { SessionProvider } from 'next-auth/react'

export default function Proxy({children}:any) {
  return (
    <>
        <SessionProvider>

 {children}

        </SessionProvider>
       
    </>
  )
}
