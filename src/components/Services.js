import React from 'react';
//icons
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';



// services data
const services = [
  {
    name: 
    'Founder.uz',
    description: 
    'This site highlights the founders in Uzbekistan. Visit the site for more information !',
    link: <a href='//founder-uz.netlify.app'>Click Me</a>,

  },
  {
    name:
    'Getpower.uz',
    description: 
    'On this site you can find interesting games. Come in and try it, you wont waste your time !',
    link: <a href='//getpower.netlify.app'>Click Me</a>,

  },
  {
    name:
    'Farrukh-chat.uz (PHP)',
    description: 
    'chat.uz is written in php programming language and can be tested via local network (sorry for the mistake) ',
    link: <a href='#'>Click Me</a>,

  },
  
]



const Services = () => {
  return ( 
   <div style={{ marginTop: "8%" }} className='section' id='services'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
    {/* {text & image} */}
    <motion.div 
     variants={fadeIn('right', 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
  
    className='flex-1 lg:bg-services lg:size-[30px] lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-5'>
    <h2 className='h2 text-accent mb-7'>Websites that belong to me. Watch it</h2>
    {/* <h3 className='h3 max-w-[455px] mb-16 '>I'm a Freelance Frontend Developer with over 5 years of expirience.</h3> */}
    {/* <button className='btn btn-sm'>See My Work</button> */}
    </motion.div>

    {/* {services} */}
    <motion.div
       variants={fadeIn('left', 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
     className='flex-1'>
    {/* {service list} */}
    <div>
    {services.map((service, index)=> {

      const {name, description, link} = service;
      return (
       <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>

       <div className='max-w-[476px]'>
        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
        {name}
        </h4>
        <p className='font-secondary leading-tight'>
        {description}
        </p>
       </div>

       <div className='flex flex-col flex-1 item-end'>
        <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
        <BsArrowUpRight />
        </a>

        <a href="#" className='text-gradient text-sm'>
        {link}
        </a>
       </div>

       </div>
      )
    }
    )}
    </div>
    </motion.div>
    </div>
   </div>
   </div>
  )
};




export default Services;
