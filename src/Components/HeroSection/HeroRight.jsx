import React from 'react'
import { motion } from 'framer-motion'
import img from '../Assets/hero1.png'
export default function HeroRight() {
  return (
    <div className='relative'>
          <motion.div
          transition={{duration:1 ,type:'keyframes'}}
          initial={{scale:0, opacity:0 }}
          animate={{scale:1 ,opacity:1}} 
          className="absolute z-10 w-fit border border-white bg-[white/70] backdrop-blur-sm top-16 shadow-lg py-1 px-2 rounded-lg ">
            <p className='font-bold text-3xl letter-2 text-white'>45% <span className=' text-sm text-[#3d251b]'>discount</span></p>
            <h1 className='font-bold text-sm'> on 1st  three orders</h1>
        </motion.div>
        <motion.div layoutId='tab' className='rounded-full'>
        <motion.img  
        transition={{duration:0.5 ,type:'tween'}}
        initial={{x:'100%', opacity:0 }}
        animate={{x:0 ,opacity:1}} 
          className='duration-300 ' src={img} alt="Hero Section" />
        </motion.div>
    </div>
  )
}
