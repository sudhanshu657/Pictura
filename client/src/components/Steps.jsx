// import React from 'react'
// import { stepsData } from '../assets/assets'
// import { motion } from 'framer-motion'

// const Steps = () => {
//   return (
//     <motion.div  
//      initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{ opacity:1, y:0 }} viewport={{ once: true}}
//     className='flex flex-col items-center justify-center my-32'>
//         <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
//            How It Works
//         </h1>

//         <p className='text-lg text-gray-600 mb-8'>
//             TransForm Words Into Stunning Images
//         </p>

//         <div className='space-y-4 w-full max-w-3xl text-sm'>
//            {stepsData.map((item, index) =>(
//               <div key={index}
//                className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg'>
//                  <img width={40} src={item.icon} alt='' />
//                  <div>
//                     <h2 className='text-xl font-medium '>{item.title}</h2>
//                     <p className='text-gray-500'>{item.description}</p>
//                  </div>
//               </div>
//            ))} 
//         </div>

//     </motion.div>
//   )
// }

// export default Steps



// 
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AITools = () => {
  const toolsData = [
    {
      title: "Text remover",
      description: "Transform your words into stunning visual artwork using advanced AI technology",
      icon: "🎨",
      link: "/text-removal",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "BG Remover",
      description: "Remove backgrounds from images instantly with precision and ease",
      icon: "🖼️",
      link: "/bg-remover",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Object Remover",
      description: "Seamlessly remove unwanted objects from your photos with AI",
      icon: "✂️",
      link: "/object-remover",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <motion.div  
      initial={{opacity:0.2, y:100}} 
      transition={{duration:1}} 
      whileInView={{ opacity:1, y:0 }} 
      viewport={{ once: true}}
      className='flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8'
    >
      {/* Header Section */}
      <div className='text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900 leading-tight'>
          Explore our AI tools
        </h1>

        <p className='text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4 sm:px-0'>
          Powerful AI-driven tools for creative professionals
        </p>
      </div>

      {/* Tools Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl'>
        {toolsData.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className='group w-full'
          >
            <Link to={tool.link} className='block h-full'>
              <div className='relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-105 border border-gray-100 h-full flex flex-col'>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className='relative p-6 sm:p-8 lg:p-10 text-center flex flex-col flex-grow'>
                  {/* Icon */}
                  <div className='text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6'>
                    {tool.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800 group-hover:text-gray-900 leading-tight'>
                    {tool.title}
                  </h3>
                  
                  {/* Description */}
                  <p className='text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 flex-grow px-2 sm:px-0'>
                    {tool.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${tool.gradient} text-white text-sm sm:text-base font-medium rounded-lg sm:rounded-xl hover:shadow-lg transform transition-all duration-300 group-hover:scale-105 w-full sm:w-auto mx-auto`}>
                    <span>Try Now</span>
                    <svg className='w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Optional: Additional responsive spacing for very large screens */}
      <div className='hidden xl:block mt-16'></div>
    </motion.div>
  )
}

export default AITools