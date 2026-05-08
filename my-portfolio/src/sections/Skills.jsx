import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaPython, FaJava, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiMysql, SiKalilinux } from "react-icons/si";


export default function Skills(){

  const skills=[
    {icon:<FaPython /> , value:"Python"},
    {icon:<FaJava /> , value:"Java"},
    {icon:<SiMysql /> , value:"MySql"},
    {icon:<FaHtml5 /> , value:"Html"},
    {icon:<FaCss3 /> , value:"Css"},
    {icon:<FaReact /> , value:"React"},
    {icon:<SiKalilinux /> , value:"Linux"},
  ];

const repeated=[...skills, ...skills, ...skills, ...skills]


const [dir, setDir]=useState(-1);

const [active, setActive]=useState(false);

const sectionRef = useRef(null);

const trackRef =useRef(null);

const touchY = useRef(null);

const x= useMotionValue(0);


useEffect(()=> {
const el = sectionRef.current;
if(!el) return;

const io= new IntersectionObserver((
  [entry])=>{
    setActive(entry.isIntersecting && entry.intersectionRatio >0.1);
  },
  {threshold :[0.1]}
)

io.observe(el);
return()=>io.disconnect();


}, []);



//Touch detect and defined where it move direction
useEffect(( )=>{
  if(!active) return;

  const onWheel =(e) => setDir(e.deltaY > 0 ? -1 : 1);
  const onTouchStart=(e) => (touchY.current = e.touches[0].clientY);
  const onTouchMove=(e) => {
    if(touchY.current === null) return;
    const delta = e.touches[0].clientY - touchY.current;
    setDir(delta>0 ? 1:-1);
    touchY.current = e.touches[0].clientY;
  };

  window.addEventListener('wheel', onWheel, {passive:true});
  window.addEventListener('touchstart', onTouchStart, {passive:true});
  window.addEventListener('touchmove', onTouchMove, {passive:true});

return()=>{
  window.removeEventListener('wheel',onWheel);
  window.removeEventListener('touchstart',onTouchStart);
  window.removeEventListener('touchmove',onTouchMove);
}

},[active]);

useEffect(()=>{
  let id;
  let last = performance.now();
  const SPEED = 80;

  const tick =(now)=>{
    const dt=(now-last)/1000;
    last = now;

    let next = x.get() + SPEED * dir * dt;
    const loop = trackRef.current?.scrollWidth / repeated.length * skills.length

    if(loop){
      if(next <= -loop) next += loop;
      if(next >= 0) next -= loop;
    }

    x.set(next);

    id = requestAnimationFrame(tick);
  }

  id = requestAnimationFrame(tick);

  return() => cancelAnimationFrame(id);

}, [dir, x]);

  return(
<section id="skills" 
ref={sectionRef}
className="h-1/2 w-full pd-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
<div className='absolute inset-0 pointer-events-none'>
  <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
opacity-20 blur-[120px] animate-pulse
'/>
  <div className='absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
opacity-20 blur-[120px] animate-pulse delay-500
'/>
</div>

<motion.h2 className='text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10'
initial={{opacity:0, y:-30}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.5, delay:0.1}}
>
  My Skills
</motion.h2>

<motion.p className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10'
initial={{opacity:0, y:-10}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.5, delay:0.1}}
>
 Working Day by Day on these stuff
</motion.p>
<div className='relative w-full overflow-hidden '>
<motion.div 
ref={trackRef}
className='flex gap-10 text-6xl text-[#1cd8d2]'
style={{x, whiteSpace: "nowrap", willChange:"transform"}}
>

  {repeated.map((s,i)=>(
  <div 
  key={i} className='flex flex-col items-center gap-2 min-w-[120px] '
  aria-label={s.value}
  title={s.value}
  >
<span className='hover:scale-125 transition-transform duration-300'>
  {s.icon}
</span>
<p className='text-sm'>
  {s.value}
</p>
  </div>
  ))}

</motion.div>


</div>
</section>

  )
}