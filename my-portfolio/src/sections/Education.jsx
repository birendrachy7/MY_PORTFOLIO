import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

export default function Education(){

const education = [

{
icon:<FaGraduationCap/>,
degree:"Bachelor of Computer Engineering",
institution:"National Academy of Science and Technology",
year:"2022 - Present",
description:"Pursuing Bachelor of Computer Engineering ."
},

{
icon:<FaSchool/>,
degree:"Secondary & Higher Secondary Education (Grade IX - XII)",
institution:"Aishwarya Vidya Niketan",
year:"Completed",
description:"Completed Secondary and Higher Secondary Level Education."
},

{
icon:<FaBook/>,
degree:"Primary Education (Nursery - Grade VIII)",
institution:"Himal Academy, Dhangadhi",
year:"Completed",
description:"Completed BLE Education."
}

];

return(

<section
id="education"
className="min-h-screen w-full flex flex-col items-center relative bg-black text-white overflow-hidden px-6 pt-28 pb-20"
>

{/* Animated Background Glow */}

<div className="absolute inset-0 pointer-events-none">

<div className="absolute top-20 left-0 w-[340px] h-[340px] rounded-full
bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
opacity-20 blur-[130px] animate-pulse"/>

<div className="absolute bottom-10 right-0 w-[340px] h-[340px] rounded-full
bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
opacity-20 blur-[130px] animate-pulse delay-700"/>

</div>


{/* Section Title */}

<motion.h2
className="text-4xl sm:text-5xl font-bold mb-20 text-transparent bg-clip-text
bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
initial={{opacity:0,y:-40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>
Education Qualification
</motion.h2>


{/* Timeline Container */}

<div className="relative max-w-6xl w-full">

{/* Vertical Animated Line */}

<motion.div
initial={{height:0}}
whileInView={{height:"100%"}}
transition={{duration:1}}
className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px]
bg-gradient-to-b from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
/>


<div className="flex flex-col gap-20">

{education.map((edu,i)=>{

const isLeft = i % 2 === 0;

return(

<motion.div
key={i}
className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
initial={{opacity:0, y:50}}
whileInView={{opacity:1, y:0}}
transition={{delay:i*0.3}}
viewport={{once:true}}
>

{/* Timeline Dot */}

<div className="absolute left-1/2 -translate-x-1/2 top-8
w-6 h-6 rounded-full
bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
shadow-[0_0_12px_#00bf8f]"
/>


{/* Card */}

<motion.div
whileHover={{scale:1.05,y:-6}}
transition={{type:"spring",stiffness:200}}
className="w-full md:w-[45%] bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg
hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,191,143,0.25)] transition"
>

<div className="flex items-center gap-3 text-[#1cd8d2] text-xl">

{edu.icon}

<h3 className="text-lg font-semibold">
{edu.degree}
</h3>

</div>

<p className="text-sm text-gray-400 mt-2">
{edu.institution} • {edu.year}
</p>

<p className="text-gray-300 text-sm mt-3 leading-relaxed">
{edu.description}
</p>

</motion.div>

</motion.div>

)

})}

</div>

</div>

</section>

)

}