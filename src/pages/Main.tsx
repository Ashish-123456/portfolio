'use client'
import About from "@/components/About";
import Intro from "@/components/Intro"
import Projects from "@/components/Projects";
const Main: React.FunctionComponent=()=>{
    return(
        <div className="mt-20 md:mt-0 lg:w-[1040px] lg:mx-32 md:mx-4">
            <Intro/>
            <About/>
            <Projects/>
        </div>
    )
}

export default Main;