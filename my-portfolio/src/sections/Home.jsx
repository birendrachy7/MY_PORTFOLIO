import { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import avator from "../assets/avator.png";

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/birendrachy_7" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/birendra-chaudhary-5a49a8332/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/birendrachy7" },
  { Icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/birendrachy.07" },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/birendra.chy.7/" }
];

const glowVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.25,
    y: -5,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.9))",
    transition: { type: "spring", stiffness: 300 }
  }
};

export default function Home() {

  const roles = useMemo(() => ["Computer Engineering Student","Problem Analyst","Aspiring Network & Cyber Analyst ","Software Developer"], []);
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">

      <ParticlesBackground />

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute -top-32 -left-32 w-[35vw] h-[35vw] rounded-full
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-20 blur-[140px] animate-pulse"/>

        <div className="absolute -bottom-32 -right-32 w-[35vw] h-[35vw] rounded-full
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-20 blur-[140px] animate-pulse delay-500"/>

      </div>


      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">

          {/* ROLE TEXT */}
          <motion.div
            className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#1cd8d2]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {roles[index].substring(0, subIndex)}
            <span className="ml-1 border-r-2 border-[#1cd8d2] animate-pulse"></span>
          </motion.div>


          {/* NAME */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello I'm
            <br />

            <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
            bg-clip-text text-transparent drop-shadow-lg">
              Birendra Chaudhary
            </span>
          </motion.h1>


          {/* DESCRIPTION */}
          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Computer Engineering student with a strong interest in networking and cybersecurity.
          </motion.p>


          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">

            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium text-lg text-white
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
              shadow-lg hover:scale-110 transition"
            >
              View Projects
            </a>

            <a
              href="Resume.pdf"/*"/Font page.pdf"*/
              download
              className="px-6 py-3 rounded-full font-medium text-black
              bg-white hover:bg-gray-200 shadow-lg hover:scale-110 transition"
            >
              Download Resume
            </a>

          </div>


          {/* SOCIAL ICONS */}
          <div className="mt-10 flex gap-6 justify-center lg:justify-start text-3xl">

            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                className="p-3 rounded-full bg-white/5 backdrop-blur-md
                border border-white/10 text-gray-300 hover:text-[#1cd8d2]"
              >
                <Icon />
              </motion.a>
            ))}

          </div>

        </div>


        {/* RIGHT SIDE AVATAR */}
        <div className="relative hidden lg:flex items-center justify-center">

          <div className="absolute w-[380px] h-[380px] rounded-full
          bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
          blur-[120px] opacity-30 animate-pulse"/>

          <motion.img
            src={avator}
            alt="Birendra Chaudhary"
            className="relative w-[420px] object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

        </div>

      </div>


      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-gray-400 rounded mt-2"></div>
        </motion.div>

      </div>

    </section>
  );
}