import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div
     initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{ opacity:1, y:0 }} viewport={{ once: true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>

        <h1 className='text-3xl sm:text-3xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your Imagination into Visuals</p>

       
       <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_2} alt=''  className='w-80 xl:w-96 rounded-lg'/>
       
       <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
          <p className='text-gray-600 mb-4'>
              "Effortlessly turn your ideas into reality using our free AI image generator. Whether you're looking for captivating visuals or imaginative creations, our tool converts your words into striking images in seconds. Just imagine, describe, and watch your vision come alive."
          </p>

           <p className='text-gray-600'>
            Our AI image generator webpage allows users to effortlessly create high-quality images from text prompts. Simply enter a description, and the system uses advanced artificial intelligence to generate a unique, visually stunning image that matches your input. The platform is user-friendly, fast, and completely free—ideal for designers, marketers, content creators, and anyone looking to bring their imagination to life with just a few words.
           </p>
       </div>
       </div>

    </motion.div>
  )
}

export default Description