import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(){

const socials = [
{ icon: <FaGithub />, link: "https://github.com/birendrachy7" },
{ icon: <FaLinkedin />, link: "https://www.linkedin.com" },
{ icon: <FaXTwitter />, link: "https://x.com" },
{ icon: <FaFacebook />, link: "https://facebook.com" },
{ icon: <FaInstagram />, link: "https://instagram.com" }
];

return(

<footer className="w-full bg-black border-t border-white/10 text-white">

<div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-6">

{/* Name */}
<h3 className="text-xl font-bold bg-clip-text text-transparent
bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
Birendra Chaudhary
</h3>

{/* Quote */}
<p className="text-gray-400 text-sm max-w-xl italic">
“Security is not a product, but a process. Every line of code is an opportunity to build a safer digital world.”
</p>

{/* Social Icons */}
<div className="flex gap-5 text-xl mt-2">

{socials.map((s,i)=>(
<a
key={i}
href={s.link}
target="_blank"
rel="noopener noreferrer"
className="text-gray-400 hover:text-[#1cd8d2] transition"
>
{s.icon}
</a>
))}

</div>

</div>

{/* Copyright */}
<div className="border-t border-white/10 text-center py-4 text-sm text-gray-500">

© {new Date().getFullYear()} Birendra Chaudhary. All Rights Reserved.

</div>

</footer>

)
}