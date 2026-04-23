import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {

const projects = [

{
title: "Personal Portfolio",
description:
"My personal portfolio website built using React, TailwindCSS and Framer Motion to showcase my skills, projects and profile as a Computer Engineering student and aspiring Cyber Security Analyst.",
github: "https://github.com/birendrachy7/MY_PORTFOLIO",
demo: "https://www.birendrachaudhary08.com.np",
tech: ["React", "TailwindCSS", "Framer Motion"]
},

{
title: "Old Book Store",
description:
"A web application where users can buy and sell second-hand books. Built using Flask and MySQL with features like book listing, database management and user interaction.",
github: "https://github.com/birendrachy7/Old-Book-Store",
demo: null,
tech: ["Python", "Flask", "MySQL", "HTML", "CSS"]
},
{
  title: "SNMP Network Monitoring Lab",
  description:
    "A network monitoring lab that simulates SNMP-based device performance tracking. Configured SNMP agents and managers to monitor uptime, interface status, and device metrics. Demonstrates practical NOC-style monitoring concepts.",
  github: "https://github.com/birendrachy7/SNMP-Network-Monitoring-Lab",
  demo: null,
  tech: ["SNMP", "Network Monitoring", "Linux", "TCP/IP", "Infrastructure"]
},
{
  title: "Python Network Monitoring Tool",
  description:
    "A Python-based CLI tool that monitors network device availability using ICMP ping. Performs periodic health checks and logs device status to detect downtime conditions. Built to simulate basic network monitoring automation.",
  github: "https://github.com/birendrachy7/network-monitoring-tool",
  demo: null,
  tech: ["Python", "ICMP", "Automation", "Network Monitoring", "CLI"]
},
{
  title: "SNMP Network Monitoring Lab",
  description:
    "A network monitoring lab that simulates SNMP-based device performance tracking. Configured SNMP agents and managers to monitor uptime, interface status, and device metrics. Demonstrates practical NOC-style monitoring concepts.",
  github: "https://github.com/birendrachy7/SNMP-Network-Monitoring-Lab",
  demo: null,
  tech: ["SNMP", "Network Monitoring", "Linux", "TCP/IP", "Infrastructure"]
},
/*
{
title: "Network Scanner Tool",
description: "A Python tool that scans open ports and identifies potential vulnerabilities in a network.",
github: "https://github.com/yourusername/network-scanner",
demo: null,
tech: ["Python","Networking","Security"]
}
*/
];

return (

<section
id="projects"
className="min-h-screen w-full flex flex-col items-center justify-center relative bg-black text-white overflow-hidden px-6 py-20"
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
initial={{opacity:0, y:-20}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>
Projects
</motion.h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

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
className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg
bg-white text-black hover:bg-gray-200 transition"
>
<FaGithub />
View GitHub
</a>

{project.demo && (
<a
href={project.demo}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg
border border-white/20 hover:bg-white/10 transition"
>
<FaExternalLinkAlt />
Live Demo
</a>
)}

</div>

</motion.div>

))}

</div>

</section>

);
}