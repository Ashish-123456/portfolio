// 'use client'

import { headerItems, projects } from "@/constants/constant";
import type { Projects } from "@/modals/Projects";
import Image from "next/image";
import Link from "next/link";


const Projects:React.FC=()=>{
    return(
        <section 
            className="h-screen flex flex-col text-center justify-center items-center"
            id={headerItems.projects.page}
        >
        <h1 className="text-4xl lg:text-5xl my-6 ">Projects</h1>    
        <div className="flex flex-row justify-evenly items-center text-center p-2 flex-wrap">
            {
                Object.keys(projects).map((projectKey,idx) =>(
                  <Link  key={idx}
                    href={projects[projectKey as keyof Projects ].url}
                    className="w-full md:w-1/2 lg:w-1/4 m-2 p-2 shadow-2xl rounded-sm">
                  <Image 
                    src={projects[projectKey as keyof Projects ].picture}
                    alt="Project_img"
                    width={250}
                    height={300}
                  /> 
                  <div
                    className="text-2xl font-medium text-center"
                    >{projectKey}
                  </div> 
                  </Link> 
                ))
            }
        </div>
        </section>
    )
}

export default Projects;