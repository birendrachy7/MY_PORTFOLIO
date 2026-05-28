import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {

const projects = [

{
title: "Personal Portfolio Website",
description:
"A responsive portfolio built using React, TailwindCSS, and Framer Motion to showcase technical skills, projects, and academic profile with modern UI/UX design.",
github: "https://github.com/birendrachy7/MY_PORTFOLIO",
demo: "https://www.birendrachaudhary08.com.np",
tech: ["React", "TailwindCSS", "Framer Motion"]
},

{
title: "Old Book Store Management System",
description:
"A full-stack web application for buying and selling second-hand books. Built using Flask and MySQL with CRUD operations, database integration, and user interaction features.",
github: "https://github.com/birendrachy7/Old-Book-Store",
demo: null,
tech: ["Python", "Flask", "MySQL", "HTML", "CSS"]
},

{
title: "SNMP-Based Network Monitoring System",
description:
"A network monitoring system using SNMP protocol to track device performance including uptime, interface status, and system health in a simulated NOC environment.",
github: "https://github.com/birendrachy7/SNMP-Network-Monitoring-Lab",
demo: null,
tech: ["SNMP", "Networking", "Linux", "TCP/IP"]
},

{
title: "Python Network Monitoring Tool",
description:
"A Python-based automation tool that monitors network device availability using ICMP ping with logging and periodic health checks for system monitoring.",
github: "https://github.com/birendrachy7/network-monitoring-tool",
demo: null,
tech: ["Python", "ICMP", "Automation", "Networking"]
}

];

return (
<section
id="projects"
className="min-h-screen w-full flex flex-col items-center justify-center relative bg-black text-white overflow-hidden px-6 py-20"
>

{/* Background Glow */}
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-20 left-0 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse"/>
<div className="absolute bottom-20 right-0 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500"/>
</div>

{/* Title */}
<motion.h2
className="text-4xl sm:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
initial={{opacity:0, y:-20}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>
Projects
</motion.h2>

{/* Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl w-full">

{projects.map((project, i) => (

<motion.div
key={i}
className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
initial={{opacity:0, y:20}}
whileInView={{opacity:1, y:0}}
transition={{delay: i * 0.1}}
viewport={{once:true}}
>

<h3 className="text-xl font-semibold text-[#1cd8d2]">
{project.title}
</h3>

<p className="text-gray-300 mt-3 text-sm leading-relaxed">
{project.description}
</p>

<div className="flex flex-wrap gap-2 mt-4">
{project.tech.map((tech, index) => (
<span
key={index}
className="text-xs bg-white/10 px-2 py-1 rounded-md"
>
{tech}
</span>
))}
</div>

<div className="flex gap-4 mt-auto pt-6">

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white text-black hover:bg-gray-200 transition"
>
<FaGithub />
Code
</a>

{project.demo && (
<a
href={project.demo}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/20 hover:bg-white/10 transition"
>
<FaExternalLinkAlt />
Live
</a>
)}

</div>

</motion.div>

))}

</div>

</section>
);
}