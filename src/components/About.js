import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
// icons
import {FaYoutube, FaInstagram, FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa';  



const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
    
  });
  

  return (
    <section style={{ marginTop: "8%" }} className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
    
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>

    {/* img */}
    <motion.div 
    variants={fadeIn('right', 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
     className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
     </motion.div>
    {/* text */}
    <motion.div
    variants={fadeIn('left', 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
     className='flex-1'>
    <h2 className='h2 text-accent'>About me.</h2>
    <h3 className='h3 mb-4'>I'm a Freelance Frontend Developer with over 3 years of expirience.</h3>
    <p className='mb-6'>Hello my name is Farrukh... <hr/>  Html, Css, Sass, Bootsrap and know programming language Javascript [ Node.js, Vue.js, React.js ];  PHP [ MySql, Yii2 ];
    I am a master of my work. I try to do my work quickly with good quality and beautiful design.
     </p>
    
    {/* stats */}
    <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
       <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
          {InView ? <CountUp start={0} end={3} duration={3} /> : null }
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Years of <br/> Expirience
          </div>
        </div>

        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
          {InView ? <CountUp start={0} end={18} duration={3} /> : null }
            
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Project <br/> Completed
          </div>
        </div>

        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
          {InView ? <CountUp start={0} end={33} duration={3} /> : null }
          
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Satisfied<br/> Clients
          </div>
        </div>
      
    </div>

    <motion.div 
    variants={fadeIn('right', 0.7)} 
    initial="hidden"
    whileInView={'show'} 
    viewport={{once: false, amount: 0.7 }}
    className='flex gap-x-8 items-center'> 
    {/* <a href="/contact">
    <button  className='btn btn-lg'>Contact Me</button>
      </a> */}
    <a href={'//getpower.netlify.app'} target="_blank" className='text-gradient btn-link' > 
    My Getpower.uz
    </a>




    <motion.div 
             variants={fadeIn('left', 0.7)} 
             initial="hidden"
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7 }}
            className='flex  text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '> 
            <a href="//www.instagram.com/farrux_life/">
            <FaInstagram />   
            </a>
            <a href="//www.facebook.com/farrukh.mukhammadkulov.5">
            <FaFacebook />
            </a>
            <a href="//t.me/farrux_life">
            <FaTelegram />
            </a>
            <a href="//twitter.com/Farrux28840305">
            <FaTwitter />
            </a>
            <a href="//www.youtube.com/@farrukhmukhammadkulov5727/videos">
            <FaYoutube />
            </a>
            
            </motion.div>



    
    </motion.div>


    </motion.div>
    </div>
    </div>
    </section>
  );
};

export default About;
