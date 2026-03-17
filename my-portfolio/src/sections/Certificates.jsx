import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Certificates(){

const certificates=[

{
title:"Programming with Python 3.X",
issuer:"simplilearn",
description:"The Programming with Python 3.X course teaches the basics of Python, including installing Python, writing simple programs, using variables and data types, working with loops and conditions, creating functions, handling lists and files, and learning basic debugging and object-oriented programming concepts.",
link:"https://drive.google.com/file/d/19iTIVso42rErgJVQkrnjTwN4ECxyVNXV/view?usp=sharing"
},

{
title:"Computer Network and Security Certificate",
issuer:"National Academy of Science and Technology (Pokhara University)",
description:"Completed a 20-hour non-credit course in Computer Network and Security, gaining foundational knowledge in networking concepts and system security.",
link:"https://drive.google.com/file/d/1bRn7wfdY-Tf-1XZs36mKuvUK9TRWRkFY/view?usp=sharing"
},
/*
{
title:"Cyber Security Fundamentals",
issuer:"Online Training",
description:"Introduction to cyber security concepts including networking security, vulnerabilities and basic ethical hacking principles.",
link:"#"
}
*/
];

return(

<section
id="certificates"
className="min-h-screen w-full flex flex-col items-center  relative bg-black text-white overflow-hidden px-6 py-20"
>

{/* Background Glow */}
<div className="absolute inset-0 pointer-events-none">

<div className="absolute top-20 left-0 w-[320px] h-[320px] rounded-full
bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
opacity-20 blur-[120px] animate-pulse"/>

<div className="absolute bottom-20 right-0 w-[320px] h-[320px] rounded-full
bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
opacity-20 blur-[120px] animate-pulse delay-500"/>

</div>

<motion.h2
className="text-4xl sm:text-5xl font-bold mb-12 text-transparent bg-clip-text
bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
initial={{opacity:0,y:-20}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>
Certificates
</motion.h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full items-stretch">

{certificates.map((cert,i)=>(

<motion.div
key={i}
className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md
hover:bg-white/10 transition-all duration-300 flex flex-col"
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
viewport={{once:true}}
>

<h3 className="text-xl font-semibold text-[#1cd8d2]">
{cert.title}
</h3>

<p className="text-sm text-gray-400 mt-1">
{cert.issuer}
</p>

<p className="text-gray-300 mt-3 text-sm leading-relaxed">
{cert.description}
</p>

<div className="mt-auto pt-6">

<a
href={cert.link}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg
border border-white/20 hover:bg-white/10 transition w-fit"
>

<FaExternalLinkAlt/>
View Certificate

</a>

</div>

</motion.div>

))}

</div>

</section>

)

}