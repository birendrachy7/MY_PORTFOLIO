import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact(){

const form = useRef();

const [loading,setLoading] = useState(false);
const [status,setStatus] = useState("");

const lastSent = useRef(0); // spam protection


const sendEmail = (e)=>{
e.preventDefault();

const now = Date.now();

if(now - lastSent.current < 15000){
setStatus("Please wait before sending another message.");
return;
}

setLoading(true);

emailjs.sendForm(
"service_gk0pogk",
"template_xl33iol",
form.current,
"Ryg0j4kWuWFWFIlj-"
).then(
()=>{
setLoading(false);
setStatus("Message sent successfully!");
form.current.reset();
lastSent.current = Date.now();

setTimeout(()=>setStatus(""),4000);  
},
()=>{
setLoading(false);
setStatus("Failed to send message. Please try again.");

setTimeout(()=>setStatus(""),4000);  
}
);

};

return(

<section
id="contact"
className="min-h-screen w-full flex flex-col items-center relative bg-black text-white overflow-hidden px-6 pt-20 pb-16"
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
Contact
</motion.h2>


<div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">

{/* Contact Info */}

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<h3 className="text-2xl font-semibold mb-4 text-[#1cd8d2]">
Let's Connect
</h3>

<p className="text-gray-300 mb-6">
Feel free to contact me for collaboration, projects, or cybersecurity opportunities.
</p>

<div className="space-y-4">

<div className="flex items-center gap-3">
<FaEnvelope className="text-[#1cd8d2]" />
<span>info.birendra008@gmail.com</span>
</div>

<div className="flex items-center gap-3">
<FaLinkedin className="text-[#1cd8d2]" />
<a
href="https://www.linkedin.com/in/birendra-chaudhary-5a49a8332/"
target="_blank"
rel="noopener noreferrer"
className="hover:underline"
>
LinkedIn Profile
</a>
</div>

<div className="flex items-center gap-3">
<FaGithub className="text-[#1cd8d2]" />
<a
href="https://github.com/birendrachy7"
target="_blank"
rel="noopener noreferrer"
className="hover:underline"
>
GitHub Profile
</a>
</div>

</div>

</motion.div>


{/* Contact Form */}

<motion.form
ref={form}
onSubmit={sendEmail}
className="flex flex-col gap-4"
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<input
type="text"
name="user_name"
placeholder="Your Name"
required
className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1cd8d2]"
/>

<input
type="email"
name="user_email"
placeholder="Your Email"
required
className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1cd8d2]"
/>

<textarea
name="message"
rows="5"
placeholder="Your Message"
required
className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1cd8d2]"
/>

<button
type="submit"
disabled={loading}
className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
>

{loading ? "Sending..." : "Send Message"}

</button>

{status && (
<motion.div
initial={{opacity:0, x:100}}
animate={{opacity:1, x:0}}
exit={{opacity:0, x:100}}
className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
${status.includes("successfully")
? "bg-green-500 text-white"
: "bg-red-500 text-white"}`}
>

{status.includes("successfully")}

<span>{status}</span>

</motion.div>
)}

</motion.form>

</div>

</section>

)

}