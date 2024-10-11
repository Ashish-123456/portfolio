import { Projects } from "@/modals/Projects"
import {UserObject} from "../modals/User"
import { NavItem } from "@/modals/Header"

export const headerItems:NavItem={
    home:{label:'Home',page:'home'},
    about:{label:'About',page:'about'},
    projects:{label:'Projects',page:'projects'},
}

export const userInfo:UserObject={
    name:'Ashish Kumar Pandey', 
    phone:"1234567890",
    picture:"https://i.ibb.co/bvss2fd/PROFILE-PHOTO.jpg",
    about:'I&#39;m Skilled in C++ along with Full Stack Development, DSA, Strong problem-solving abilities and passionate about staying updated with tech trends. Seeking opportunities to contribute to impactful projects and thrive in acollaborative environment',
    heading: `
        <p>Passionate Software Engineer Skilled in Full Stack Development and experienced in executing projects.</p>
        <p>I am proficient in Data Structure and Algorithms along with computer Science fundamentals which allowing me to refine my skills and approach to problem-solving.</p>
        <p>I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
        <p>I am seeking for an Opprtunity to contribute my skillsets, experties and enhace skills to grow along with organisation.</p>
        `,
    skills:{
        Languages:['C++(Proficient)', 'JavaScript', 'CP', 'Java', 'Python(basic)'],
        Technologies:['React.js', 'Next.js', 'Angular', 'UseContext', 'Redux', 'Axios', 'Node.js','Express.js', 'Spring boot', 'WebApi', 'WebSocket'],
        ComputerScienceFundamentals:['OS', 'DBMS', 'OOPs', 'Linux(Basic)'],  
        Database:['MongoDB', 'MYSQL'],
        SoftSkills:['Problem Solving', 'Leadership', 'Time Management', 'Hardworking', 'Quick Learner', 'Honest']
    }    
}
export const projects:Projects={
    
    GuessNumber:{
        url:"https://github.com/Ashish-123456/Guess_number",
        picture:"https://i.ibb.co/VCWTTt6/Guess-Number.png"
    },
    WeatherApp:{
        url:"https://github.com/Ashish-123456",
        picture:"https://i.ibb.co/JjkWxvt/Weather-App.png"
    },
    Mailer:{
        url:"https://github.com/Ashish-123456/Mailer",
        picture:"https://i.ibb.co/kHP7mJG/Screenshot-2024-10-07-202115.png"
    } ,
    ChatApp:{
        url:"https://github.com/Ashish-123456/ChatApp",
        picture:"https://i.ibb.co/vcZxH5R/ChatApp.png"
    },
    ShopApp:{
        url:"https://github.com/Ashish-123456/Shopapp",
        picture:"https://i.ibb.co/pr5bhhf/ShopApp.png"
    } 
}

