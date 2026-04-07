import { getCategories } from '@/_Services/Api'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'   // Optional but recommended

interface Props {
    bgLinear: string
    field: string
    title: string
    disc: string
    icon: React.ReactNode   // Better type: accept component or node
}

export default async function Categoriesnav({bgLinear, field,title,disc,icon }: Props) {

    const categories = await getCategories()

    return (
        <>
            <div className={`${bgLinear}`}>
                <div className="mx-auto w-10/12 p-8 mb-8  ">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 mb-8 text-sm font-medium">
                        <Link href="/" className="text-white/70 hover:text-white transition-colors">
                            Home
                        </Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white">{field}</span>
                    </nav>

                    {/* Title & Icon Section */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                          
                            {icon}
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold text-white tracking-tight">{title}</h1>
                            <p className="text-indigo-100 mt-1">{disc}</p>
                        </div>
                    </div>
                </div>
            </div>

        
        </>
    )
}