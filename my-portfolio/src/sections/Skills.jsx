import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaTools
} from "react-icons/fa";

import {
  SiMysql,
  SiPostman,
  SiCplusplus,
  SiC
} from "react-icons/si";

export default function Skills() {

  const skills = [
    { icon: <FaHtml5 />, value: "HTML5" },
    { icon: <FaCss3Alt />, value: "CSS3" },
    { icon: <FaJs />, value: "JavaScript (Basics)" },

    { icon: <FaPython />, value: "Python (Flask)" },

    { icon: <SiMysql />, value: "MySQL" },

    { icon: <SiC />, value: "C Programming" },
    { icon: <SiCplusplus />, value: "C++" },
    { icon: <FaJava />, value: "Java" },

    { icon: <FaGitAlt />, value: "Git" },
    { icon: <FaGithub />, value: "GitHub" },

    { icon: <SiPostman />, value: "Postman (API Testing)" },

    { icon: <FaAws />, value: "AWS Basics" },

  ];

  const repeated = [...skills, ...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);

  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
    }, { threshold: [0.1] });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (touchY.current === null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + SPEED * dir * dt;

      const loop =
        trackRef.current?.scrollWidth / repeated.length * skills.length;

      if (loop) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }

      x.set(next);

      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-16 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        className="mt-2 mb-10 text-white/80 text-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Technologies & Tools I've Worked With
      </motion.p>

      {/* Skills Track */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-5xl text-[#1cd8d2]"
          style={{ x, whiteSpace: "nowrap" }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[140px]"
              title={s.value}
            >
              <span className="hover:scale-125 transition">
                {s.icon}
              </span>
              <p className="text-xs text-white/80 text-center">
                {s.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}