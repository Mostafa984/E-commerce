import { getCategories } from '@/_Services/Api'
import Link from 'next/link'
import React from 'react'
import { IoLayers } from 'react-icons/io5'

export default async function Page() {
    const categories = await getCategories()

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-linear-to-r from-[#16A34A] to-[#22C55E] pb-20 pt-10">
                <div className="mx-auto w-10/12">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 mb-8 text-sm font-medium">
                        <Link href="/" className="text-white/70 hover:text-white transition-colors">
                            Home
                        </Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white">Categories</span>
                    </nav>

                    {/* Title & Icon */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                            <IoLayers className="text-white text-3xl" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-white tracking-tight">All Categories</h1>
                            <p className="text-indigo-100 mt-1">Browse our wide range of product categories</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Grid Section */}
            <section>
                <div className=" w-10/12   mx-auto px-4 py-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {categories?.map((item) => (
                            <Link
                                key={item._id}
                                href={`/category/${item.slug}`}
                                className="group bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-50">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-center font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                                    {item.name || item.slug}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>




            </section>
        </div>
    )
}