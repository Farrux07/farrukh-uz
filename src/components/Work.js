import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
//images
import Img1 from '../assets/photo1.jpg';
import Img2 from '../assets/photo2.jpg';
import Img3 from '../assets/photo3.jpg';
import Img4 from '../assets/photo4.jpg';
// import Img5 from '../assets/photo5.jpg';
// import Img6 from '../assets/photo6.jpg';




const Work = () => {
  return (
    <section style={{ marginTop: "35%" }} className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* {text} */}
          <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          >
          <h2 className='h2 leading-tight text-accent'>My Gallery <br/> </h2>
          <p className='max-w-sm mb-d'>   These are my pictures!</p>
          {/* <button className='btn btn-sm'>View all project </button> */}
          </motion.div>
          
          {/* {images} */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
             {/* {overlay} */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
             {/* {img} */}
            <img className='group-hover:scale-125 transition-all duration-500 ' src={Img2} alt="" />
            {/* {pretitle} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
              <span className='text-gradient '>Tashkent</span>
            </div>

          
            
            
            {/* {title} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
              <span className='text-3xl text-white'>Uzbekistan!</span>
            </div>
          </div>

         
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
             {/* {overlay} */}
             <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
             {/* {img} */}
            <img className='group-hover:scale-125 transition-all duration-500 ' src={Img4} alt="" />
            {/* {pretitle} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
              <span className='text-3xl text-white'>Uzbekistan!</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
              <span className='text-gradient '>Navoi</span>
            </div>
            </div>

        </motion.div>

        

    <motion.div
    variants={fadeIn('left', 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
     className='flex-1 flex flex-col gap-y-10'>
      {/* image */}
      <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
             {/* {overlay} */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
             {/* {img} */}
            <img className='group-hover:scale-125 transition-all duration-500 ' src={Img1} alt="" />
            {/* {pretitle} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
              <span className='text-gradient '>Tashkent</span>
            </div>
            
            
            {/* {title} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
              <span className='text-3xl text-white'>Uzbekistan!</span>
            </div>
          </div>
          

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
             {/* {overlay} */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
             {/* {img} */}
            <img className='group-hover:scale-125 transition-all duration-500 ' src={Img3} alt="" />
     
            {/* {pretitle} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
              <span className='text-gradient '>Navoi</span>

            </div>   
            
            {/* {title} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
              <span className='text-3xl text-white'>Uzbekistan!</span>
            </div>

            
            
          </div>

       



    </motion.div> 


    </div> 
    </div>
    </section>
  );
};

export default Work;
