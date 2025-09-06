// import React from 'react'
// import { assets } from '../assets/assets'
// import { motion } from 'framer-motion'

// const Description = () => {
//   return (
//     <motion.div
//      initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{ opacity:1, y:0 }} viewport={{ once: true}}
//     className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>

//         <h1 className='text-3xl sm:text-3xl font-semibold mb-2'>Create AI Images</h1>
//         <p className='text-gray-500 mb-8'>Turn your Imagination into Visuals</p>

       
//        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
//         <img src={assets.sample_img_2} alt=''  className='w-80 xl:w-96 rounded-lg'/>
       
//        <div>
//           <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
//           <p className='text-gray-600 mb-4'>
//               "Effortlessly turn your ideas into reality using our free AI image generator. Whether you're looking for captivating visuals or imaginative creations, our tool converts your words into striking images in seconds. Just imagine, describe, and watch your vision come alive."
//           </p>

//            <p className='text-gray-600'>
//             Our AI image generator webpage allows users to effortlessly create high-quality images from text prompts. Simply enter a description, and the system uses advanced artificial intelligence to generate a unique, visually stunning image that matches your input. The platform is user-friendly, fast, and completely free—ideal for designers, marketers, content creators, and anyone looking to bring their imagination to life with just a few words.
//            </p>
//        </div>
//        </div>

//     </motion.div>
//   )
// }

// export default Description








import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

// Mock assets for demonstration - replace with your actual assets
const asset = {
  // sample_img_2: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop&crop=center',
  
  workflow_img_1: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
  workflow_img_2: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=300&fit=crop&crop=center',
  object_removal_before: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center',
  object_removal_after: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center&sat=-100'
}

const Description = () => {
  const workflowSteps = [
    {
      step: "01",
      title: "Enter Your Prompt",
      description: "Describe your vision in simple words. Our AI understands natural language and converts your ideas into detailed visual concepts.",
      icon: "✍️"
    },
    {
      step: "02", 
      title: "AI Processing",
      description: "Advanced neural networks analyze your prompt and generate multiple creative interpretations using cutting-edge machine learning algorithms.",
      icon: "🧠"
    },
    {
      step: "03",
      title: "Image Generation",
      description: "Watch as your imagination comes to life in high-resolution images, ready for download and immediate use in your projects.",
      icon: "🖼️"
    }
  ]

  const objectRemovalSteps = [
    {
      step: "01",
      title: "Upload Image",
      description: "Select and upload the image containing unwanted objects or elements that you want to remove seamlessly.",
      icon: "📤"
    },
    {
      step: "02",
      title: "Mark Objects", 
      description: "Use our intuitive tools to highlight or mark the objects you want to remove from your image with precision.",
      icon: "🎯"
    },
    {
      step: "03",
      title: "AI Removal",
      description: "Our intelligent algorithms automatically remove marked objects while reconstructing the background naturally and seamlessly.",
      icon: "🪄"
    }
  ]

  return (
    <motion.div
      initial={{opacity:0.2, y:100}} 
      transition={{duration:1}} 
      whileInView={{ opacity:1, y:0 }} 
      viewport={{ once: true}}
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    >
      {/* Main Introduction Section */}
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-center'>Create AI Images</h1>
      <p className='text-gray-500 mb-8 text-center'>Turn your Imagination into Visuals</p>

      <div className='flex flex-col gap-8 md:gap-14 md:flex-row items-center mb-20'>
<img src={assets.sample_img_2} alt=''  className='w-80 xl:w-96 rounded-lg'/>
        
        <div className='max-w-2xl'>
          <h2 className='text-2xl md:text-3xl font-medium mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
          <p className='text-gray-600 mb-4 leading-relaxed'>
            "Effortlessly turn your ideas into reality using our free AI image generator. Whether you're looking for captivating visuals or imaginative creations, our tool converts your words into striking images in seconds. Just imagine, describe, and watch your vision come alive."
          </p>

          <p className='text-gray-600 leading-relaxed'>
            Our AI image generator webpage allows users to effortlessly create high-quality images from text prompts. Simply enter a description, and the system uses advanced artificial intelligence to generate a unique, visually stunning image that matches your input. The platform is user-friendly, fast, and completely free—ideal for designers, marketers, content creators, and anyone looking to bring their imagination to life with just a few words.
          </p>
        </div>
      </div>

      {/* Image Generation Workflow Section */}
      <motion.div 
        initial={{opacity:0, y:50}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}}
        transition={{duration:0.8}}
        className='w-full max-w-6xl mb-20'
      >
        <div className='text-center mb-12'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Image Generation Workflow</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Follow these simple steps to transform your creative ideas into stunning visual masterpieces
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.6, delay: index * 0.2}}
              className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex items-center mb-4'>
                <div className='bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4'>
                  {step.step}
                </div>
                <div className='text-3xl'>{step.icon}</div>
              </div>
              <h3 className='text-xl font-semibold mb-3'>{step.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Object Removal Workflow Section */}
      <motion.div 
        initial={{opacity:0, y:50}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}}
        transition={{duration:0.8}}
        className='w-full max-w-6xl mb-20'
      >
        <div className='text-center mb-12'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Object Removal Workflow</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Seamlessly remove unwanted objects from your images with our advanced AI technology
          </p>
        </div>

        {/* Before/After Example */}
        <div className='flex flex-col lg:flex-row gap-8 items-center mb-12'>
          <div className='flex-1'>
            <h3 className='text-lg font-semibold mb-4 text-center'>Before</h3>
            <img src={asset.object_removal_before} alt='Before object removal' className='w-full rounded-lg shadow-lg max-w-md mx-auto'/>
          </div>
          <div className='flex items-center justify-center'>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-4 shadow-lg'>
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </div>
          </div>
          <div className='flex-1'>
            <h3 className='text-lg font-semibold mb-4 text-center'>After</h3>
            <img src={asset.object_removal_after} alt='After object removal' className='w-full rounded-lg shadow-lg max-w-md mx-auto'/>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {objectRemovalSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.6, delay: index * 0.2}}
              className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex items-center mb-4'>
                <div className='bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4'>
                  {step.step}
                </div>
                <div className='text-3xl'>{step.icon}</div>
              </div>
              <h3 className='text-xl font-semibold mb-3'>{step.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Features Section */}
      <motion.div 
        initial={{opacity:0, y:50}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}}
        transition={{duration:0.8}}
        className='w-full max-w-4xl text-center'
      >
        <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Why Choose Our AI Tools?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "Generate images in seconds" },
            { icon: "🎨", title: "High Quality", desc: "Professional-grade results" },
            { icon: "🆓", title: "Completely Free", desc: "No hidden costs or limits" },
            { icon: "🔒", title: "Secure & Private", desc: "Your data stays protected" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, scale:0.9}}
              whileInView={{opacity:1, scale:1}}
              viewport={{once:true}}
              transition={{duration:0.5, delay: index * 0.1}}
              className='bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300'
            >
              <div className='text-4xl mb-3'>{feature.icon}</div>
              <h3 className='font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600 text-sm'>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Description






































