// 'use client'

import { headerItems, projects, userInfo } from "@/constants/constant";
import Image from "next/image";
import {Link as ScrollLink} from "react-scroll"

const Intro:React.FC=()=>{
    return(
        <section 
            className="h-screen flex flex-col text-center justify-center items-center lg:flex-row md:text-start"
            id={headerItems.home.page}
        >
            <div>
            <Image 
                src={userInfo.picture}
                alt="dp"
                width={300}
                height={300}
                className="rounded-full shadow-2xl mt-10 " 
            />
            <div className=" text-blue-600 text-center font-medium flex justify-around  mt-5">
            <a className="bg-[#d1cfbf] shadow-md rounded-md p-2 w-1/3 " href="mailto:ashishkrpandey@463@gmail.com">Gmail</a>
            <a className=" bg-[#d1cfbf] shadow-md rounded-md p-2 w-1/3" href="tel:+916206906399">Phone</a>
            </div>
            </div>
            <div className="lg:ml-20 text-center p-5 lg:w-1/2 lg:text-start">
                <h1 className="text-3xl md:text-4xl font-medium uppercase block mt-12 lg:mt-auto">Software Developer</h1>
                <h1 className="text-2xl mt-4 md:3xl">
                    Hi, I am
                    <span className="text-blue-600 text-3xl md:text-4xl">   {userInfo.name}</span>
                </h1>
                <p 
                    className="mt-4 mb-4"
                    dangerouslySetInnerHTML={{__html:userInfo.heading}}
                />
                {/* <button className="bg-blue-600 text-white text-xl w-28 h-16 rounded-xl font-semibold" */}
                    <ScrollLink
                      className="bg-blue-600 text-white text-xl w-40 h-40 p-2 rounded-md font-semibold cursor-pointer"
                      to={headerItems.projects.page}
                    >Projects
                    </ScrollLink>
                    
                {/* </button> */}
            </div>
        </section>
    )
}

export default Intro;