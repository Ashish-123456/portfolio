'use client'
import { userInfo, headerItems} from "@/constants/constant";
import { NavItem } from "@/modals/Header";
import { useState } from "react";
import {BiMenu} from "react-icons/bi"
import {Link as ScrollLink} from "react-scroll"

const Header: React.FC=()=>{
    const[navItems,showNavItems]=useState<boolean>(false);
    return(
        <header className="bg-white p-5 w-full z-10 justify-between fixed top-0 md:flex">
            <div className="flex justify-between"> 
                <h2 className="text-2xl text-blue-600 font-bold">Ashish PortFolio</h2>
                <BiMenu
                    size={40}
                    className="md:hidden"
                    onClick={(e)=>showNavItems(!navItems)}
                />
            </div>
            <div className={`mr-8 md:space-x-6  mt-3 md:mt-0 ${navItems?'block':'hidden'} md:block`}>
                {
                    Object.keys(headerItems).map(item=>(
                        <ScrollLink
                            to={headerItems[item as keyof NavItem].page}
                            key={headerItems[item as keyof NavItem].label}
                            className="text-xl block md:inline-block cursor-pointer"
                        >{headerItems[item as keyof NavItem].label}
                        </ScrollLink>
                    ))
                }
            </div>
        </header>
    )
}

export default Header;