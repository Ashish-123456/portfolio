// 'use client'

import { headerItems, userInfo } from "@/constants/constant";


const About:React.FC=()=>{
    return(
        <section 
            className="md:h-screen flex flex-col text-center justify-center items-center lg:flex-row md:text-start"
            id={headerItems.about.page}
        >
            <div className="flex flex-col justify-start   text-center ">
            <h1 className="text-3xl md:text-4xl font-medium uppercase block lg:mt-auto">About</h1>
            <div className="lg:ml-10 p-5 text-center lg:text-start">
            <p 
                    className="[&>p]:mt-5 mb-2"
                    dangerouslySetInnerHTML={{__html:userInfo.about}}
                />
            <div className="my-5">
                <h2 className="text-xl text-blue-600 md:text-2xl inline-block font-medium lg:mt-auto ">Education</h2>
                <br/>
                <div className="flex md:justify-between my-2">
                <p>Bachelor of Engineering, UIET, Panjab University. 8.00 CGPA</p>
                <p>Nov 2020 - Jul 2024</p>
                </div>
                <div className="flex md:justify-between my-2">
                <p>12th, Asian School, Muzaffarpur. 88.2 %</p>
                <p>2017 - 2019</p>
                </div>
                <div className="flex md:justify-between my-2">
                <p>10th, Ambika Bhawani Public School, Muzaffarpur. 9.8 CGPA</p>
                <p>2017</p>
                </div>

            </div>
            <div className="my-5">
            <h2 className="text-xl text-blue-600 md:text-2xl inline-block font-medium lg:mt-auto ">Skills</h2>
                {
                    Object.entries(userInfo.skills).map(([skillcategory,skills],index)=>(
                        <div key={index}>
                        <p className="inline text-xl">{skillcategory}: </p>
                        {
                            skills.map((val,idx)=>(
                                <span key={idx} className="bg-gray-200 m-1 p-2 inline-block font-medium rounded-md text-l">{val}</span>
                            ))
                        }
                        </div>
                    )) 
                }
            </div>  
            </div>
            </div>
        </section>
    )
}

export default About;