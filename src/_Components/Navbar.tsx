"use client"
import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import logo from "../assets/images/logo.png"
import { CiHeart } from "react-icons/ci"

import { FaHeadset, FaShoppingCart } from "react-icons/fa"

const components: { title: string; href: string; }[] = [
    {
        title: "All Categories",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Electronics ",
        href: "/docs/primitives/hover-card",
    },
    {
        title: "women's Fashion",
        href: "/docs/primitives/progress",
    },
    {
        title: "Mens's Fashion",
        href: "/docs/primitives/scroll-area",

    },
    {
        title: "Beauty & Health",
        href: "/docs/primitives/tabs",

    },
]

export function Navbar() {
    return (


        <NavigationMenu className=" z-100! sticky shadow-xs top-0 bg-white   max-w-none p-4   ">

            <div className="container  mx-auto flex justify-between items-center sm:w-full md:w-full">

                <Link href={"/"}>
                    <Image src={logo} alt={"Fresh cart Logo"} />
                </Link>

                <input className=" w-2xl py-3 px-5 bg-[#F9FAFB80] rounded-full border-2 border-[#F9FAFB80 ] " placeholder="Search for products, brands and more..." type="text" />

                <NavigationMenuList >




                    <div className=" flex ">

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link className=" bg-transparent hover:bg-transparent hover:text-[#16a34a]" href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>


                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link className="bg-transparent hover:bg-transparent hover:text-[#16a34a]" href="/product">Shop</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>




                        <NavigationMenuItem className="  bg-transparent hover:bg-transparent hidden md:flex">
                            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="     bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[200px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                           
                                        >

                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link className="bg-transparent hover:bg-transparent hover:text-[#16a34a]" href="/brands">Brands</Link>
                            </NavigationMenuLink>

                        </NavigationMenuItem>



                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link className="bg-transparent hover:bg-transparent hover:text-[#16a34a]" href="/login">login</Link>
                            </NavigationMenuLink>

                        </NavigationMenuItem>




                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link className="bg-transparent hover:bg-transparent hover:text-[#16a34a]" href="/signup">Signup</Link>
                            </NavigationMenuLink>

                        </NavigationMenuItem>



                    </div>





                    <div className="icons  gap-2 flex items-center justify-center border-r border-[#E5E7EB] ">

                        <div className=" flex justify-center items-center bg-[#F0FDF4] w-10 h-10 rounded-full">
                            <FaHeadset className=" text-[#16A34A]" />
                        </div>
                        <div>
                            <p className="text-[#99A1AF] font-medium text-xs" > Support</p>
                            <p className="text-[#364153] font-semibold text-sm"> 24/7 Help</p>
                        </div>

                        <div className=" flex items-center justify-center  gap-4">
                            <CiHeart className="w-5 h-5" />
                            <FaShoppingCart className=" w-5 h-5text-[#6A7282]" />
                        </div>

                    </div>

                </NavigationMenuList>

            </div>





        </NavigationMenu>


    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}