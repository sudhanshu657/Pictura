// import React, { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { motion } from 'framer-motion'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'

// const Header = () => {
//     const {user, setShowLogin} =useContext(AppContext)
//     const navigate = useNavigate()

//    const onClickHandler = ()=> {
//       if(user){
//         navigate('/result')
//       } else{
//         setShowLogin(true)
//       }
//    }

//     return (
//         <motion.div className='flex flex-col justify-center items-center text-center my-20'
//             initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{ opacity:1, y:0 }} viewport={{ once: true}}
//             >
//             {/* <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
//              initial={{opacity:0, y:-20}} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.8}} 
//              >
//                 <p>Most Advanced Text-to-Image Tool</p>
//                 <img src={assets.star_icon} alt='' />
//             </motion.div> */}
//                         {/* Enhanced Badge */}
//             <motion.div className='relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-3 rounded-full border-2 border-blue-100 shadow-lg backdrop-blur-sm'
//                 initial={{opacity: 0, y: -30, scale: 0.8}} 
//                 animate={{opacity: 1, y: 0, scale: 1}} 
//                 transition={{delay: 0.2, duration: 0.8, type: "spring", bounce: 0.3}}
//             >
//                 <div className='absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse'></div>
//                 <p className='text-slate-700 font-semibold text-sm sm:text-base relative z-10'>
//                     ✨ Next-Gen AI Image Generator
//                 </p>
//                 <motion.img 
//                     src={assets.star_icon} 
//                     alt='' 
//                     className='w-5 h-5 relative z-10'
//                     animate={{rotate: [0, 10, -10, 0]}}
//                     transition={{duration: 2, repeat: Infinity, repeatDelay: 3}}
//                 />
//             </motion.div>

//             <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
//                   initial={{opacity:0}} animate={{ opacity:1 }} transition={{delay:0.4, duration:2}}
//             >
//                 Turn Your Ideas Into <span className='text-blue-600' > Stunning </span> Visuals.</motion.h1>

//             <motion.p className='text-center max-w-xl mx-auto mt-5'
//                 initial={{opacity:0, y: 20}} animate={{ opacity:1, y:0 }}  transition={{delay:0.6, duration:0.8}}
//             >
//                  Perfect for creators, marketers, and dreamers. No design experience needed — just describe your vision and watch it come to life in seconds.
//             </motion.p>

//             <motion.button  onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12  py-2.5 flex items-center gap-2 rounded-full '
//               whileHover={{ scale:1.05}} whileTap={{scale:0.95}} initial={{ opacity:0 }} animate={{ opacity:1}} transition={{ default: { duration:0.5},opacity:{ delay:0.8,duration:1}}}
//             > 
//                 Generate Images
//                 <img className='h-6' src={assets.star_group} alt='' />
//             </motion.button>


//             <motion.div 
//                initial={{opacity:0}} animate={{ opacity:1 }} transition={{delay:1, duration:1}}
//             className='flex flex-wrap justify-center mt-16 gap-3'>
//                 {Array(6).fill('').map((item, index) => (
//                     <motion.img 
//                     whileHover={{ scale: 1.05, duration: 0.1}}
//                     className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
//                         src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
//                         alt='' key={index} width={70} />
//                 ))}
//             </motion.div>


//             {/* <p 
//               initial={{opacity:0}}  animate={{ opacity:1 }} transition={{delay:1.2, duration:0.8}}
//             className='mt-2 text-neutral-600'>Generated Images from Imagify</p> */}

//                             {/* Trust indicators */}
//                 <motion.div className='mt-4 flex items-center justify-center gap-6 text-sm text-gray-500'
//                     initial={{opacity: 0}}
//                     animate={{opacity: 1}}
//                     transition={{delay: 1.2, duration: 0.8}}
//                 >
//                     <div className='flex items-center gap-1'>
//                         <span className='text-green-500'>✓</span>
//                         <span>Instant Results</span>
//                     </div>
//                     <div className='flex items-center gap-1'>
//                         <span className='text-green-500'>✓</span>
//                         <span>HD Quality</span>
//                     </div>
//                     <div className='flex items-center gap-1'>
//                         <span className='text-green-500'>✓</span>
//                         <span>Commercial Use</span>
//                     </div>
              
//             </motion.div>

//         </motion.div>
//     )
// }

// export default Header














// import React, { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { motion } from 'framer-motion'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'

// const Header = () => {
//     const {user, setShowLogin} =useContext(AppContext)
//     const navigate = useNavigate()

//    const onClickHandler = ()=> {
//       if(user){
//         navigate('/result')
//       } else{
//         setShowLogin(true)
//       }
//    }

//     return (
//         <motion.div className='flex flex-col justify-center items-center text-center my-20'
//             initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{ opacity:1, y:0 }} viewport={{ once: true}}
//             >
//             {/* Professional Badge with Gradient Border */}
//             <motion.div className='relative inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-8 py-3 rounded-full border shadow-xl'
//                 initial={{opacity: 0, y: -30, scale: 0.8}} 
//                 animate={{opacity: 1, y: 0, scale: 1}} 
//                 transition={{delay: 0.2, duration: 0.8, type: "spring", bounce: 0.3}}
//                 style={{
//                     borderImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4) 1',
//                     borderWidth: '2px',
//                     borderStyle: 'solid'
//                 }}
//             >
//                 {/* Animated gradient border effect */}
//                 <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-[2px]'>
//                     <div className='bg-white rounded-full h-full w-full flex items-center justify-center'>
//                     </div>
//                 </div>
                
//                 <div className='relative z-10 flex items-center gap-3'>
//                     <div className='w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse'></div>
//                     <p className='text-slate-700 font-semibold text-sm sm:text-base tracking-wide'>
//                         AI-Powered Image Studio
//                     </p>
//                     <motion.img 
//                         src={assets.star_icon} 
//                         alt='' 
//                         className='w-5 h-5'
//                         animate={{rotate: [0, 360]}}
//                         transition={{duration: 20, repeat: Infinity, ease: "linear"}}
//                     />
//                 </div>
//             </motion.div>

//             {/* Enhanced Main Title */}
//             <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[620px] mx-auto mt-10 text-center font-bold leading-tight'
//                   initial={{opacity:0}} animate={{ opacity:1 }} transition={{delay:0.4, duration:2}}
//             >
//                 Professional <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'> 
//                 AI Image </span> Processing Suite
//             </motion.h1>

//             {/* Professional Feature Description */}
//             <motion.p className='text-center max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed'
//                 initial={{opacity:0, y: 20}} animate={{ opacity:1, y:0 }}  transition={{delay:0.6, duration:0.8}}
//             >
//                 Advanced AI technology for <span className='font-semibold text-gray-800'>background removal</span>, 
//                 <span className='font-semibold text-gray-800'> object elimination</span>, and 
//                 <span className='font-semibold text-gray-800'> text-to-image generation</span>. 
//                 Professional results in seconds.
//             </motion.p>

//             {/* Premium CTA Button */}
//             <motion.button  
//                 onClick={onClickHandler} 
//                 className='relative sm:text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-auto mt-10 px-16 py-4 flex items-center gap-3 rounded-full shadow-xl border-2 border-white/20 font-semibold tracking-wide overflow-hidden'
//                 whileHover={{ scale:1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} 
//                 whileTap={{scale:0.95}} 
//                 initial={{ opacity:0 }} 
//                 animate={{ opacity:1}} 
//                 transition={{ default: { duration:0.5}, opacity:{ delay:0.8, duration:1}}}
//             > 
//                 {/* Button shine effect */}
//                 <div className='absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shine_3s_ease-in-out_infinite]'></div>
                
//                 Start Creating
//                 <motion.img 
//                     className='h-6' 
//                     src={assets.star_group} 
//                     alt=''
//                     animate={{rotate: [0, 10, -10, 0]}}
//                     transition={{duration: 2, repeat: Infinity, repeatDelay: 2}}
//                 />
//             </motion.button>

//             {/* Professional Feature Grid */}
//             <motion.div 
//                initial={{opacity:0}} animate={{ opacity:1 }} transition={{delay:1, duration:1}}
//             className='flex flex-wrap justify-center mt-16 gap-4'>
//                 {Array(6).fill('').map((item, index) => (
//                     <motion.div
//                         key={index}
//                         className='relative group cursor-pointer'
//                         whileHover={{ y: -5 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100'></div>
//                         <motion.img 
//                             className='relative rounded-xl shadow-lg border-2 border-gray-100 max-sm:w-12 group-hover:border-blue-200 transition-all duration-300'
//                             src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
//                             alt='' 
//                             width={80} 
//                             height={80}
//                         />
//                         {/* Overlay with feature labels */}
//                         <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-2'>
//                             <span className='text-white text-xs font-medium'>
//                                 {index < 2 ? 'AI Generated' : index < 4 ? 'BG Removed' : 'Object Erased'}
//                             </span>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Enhanced Professional Trust Indicators */}
//             <motion.div className='mt-8 flex flex-wrap items-center justify-center gap-8 text-sm'
//                 initial={{opacity: 0}}
//                 animate={{opacity: 1}}
//                 transition={{delay: 1.2, duration: 0.8}}
//             >
//                 <div className='flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100'>
//                     <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
//                     <span className='text-green-700 font-medium'>Enterprise Quality</span>
//                 </div>
//                 <div className='flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100'>
//                     <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
//                     <span className='text-blue-700 font-medium'>4K Resolution</span>
//                 </div>
//                 <div className='flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-100'>
//                     <div className='w-2 h-2 bg-purple-500 rounded-full animate-pulse'></div>
//                     <span className='text-purple-700 font-medium'>API Integration</span>
//                 </div>
//                 <div className='flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100'>
//                     <div className='w-2 h-2 bg-orange-500 rounded-full animate-pulse'></div>
//                     <span className='text-orange-700 font-medium'>Batch Processing</span>
//                 </div>
//             </motion.div>

//         </motion.div>
//     )
// }

// // export default Header








import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {user, setShowLogin} =useContext(AppContext)
    const navigate = useNavigate()

   const onClickHandler = ()=> {
      if(user){
        navigate('/result')
      } else{
        setShowLogin(true)
      }
   }

    return (
        <motion.div className='flex flex-col justify-center items-center text-center my-20'
            initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{ opacity:1, y:0 }} viewport={{ once: true}}
            >
            {/* Professional Badge with Gradient Border */}
            <motion.div className='relative inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-8 py-3 rounded-full border shadow-xl'
                initial={{opacity: 0, y: -30, scale: 0.8}} 
                animate={{opacity: 1, y: 0, scale: 1}} 
                transition={{delay: 0.2, duration: 0.8, type: "spring", bounce: 0.3}}
                style={{
                    borderImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4) 1',
                    borderWidth: '2px',
                    borderStyle: 'solid'
                }}
            >
                {/* Animated gradient border effect */}
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-[2px]'>
                    <div className='bg-white rounded-full h-full w-full flex items-center justify-center'>
                    </div>
                </div>
                
                <div className='relative z-10 flex items-center gap-3'>
                    <div className='w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse'></div>
                    <p className='text-slate-700 font-semibold text-sm sm:text-base tracking-wide'>
                        AI-Powered Image Studio
                    </p>
                    <motion.img 
                        src={assets.star_icon} 
                        alt='' 
                        className='w-5 h-5'
                        animate={{rotate: [0, 360]}}
                        transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                    />
                </div>
            </motion.div>

            {/* Enhanced Main Title */}
            <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[620px] mx-auto mt-10 text-center font-bold leading-tight'
                  initial={{opacity:0}} animate={{ opacity:1 }} transition={{delay:0.4, duration:2}}
            >
                Professional <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'> 
                AI Image </span> Processing Suite
            </motion.h1>

            {/* Professional Feature Description */}
            <motion.p className='text-center max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed'
                initial={{opacity:0, y: 20}} animate={{ opacity:1, y:0 }}  transition={{delay:0.6, duration:0.8}}
            >
                Advanced AI technology for <span className='font-semibold text-gray-800'>background removal</span>, 
                <span className='font-semibold text-gray-800'> object elimination</span>, and 
                <span className='font-semibold text-gray-800'> text-to-image generation</span>. 
                Professional results in seconds.
            </motion.p>

            {/* Premium CTA Button */}
            <motion.button  
                onClick={onClickHandler} 
                className='relative sm:text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-auto mt-10 px-16 py-4 flex items-center gap-3 rounded-full shadow-xl border-2 border-white/20 font-semibold tracking-wide overflow-hidden'
                whileHover={{ scale:1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} 
                whileTap={{scale:0.95}} 
                initial={{ opacity:0 }} 
                animate={{ opacity:1}} 
                transition={{ default: { duration:0.5}, opacity:{ delay:0.8, duration:1}}}
            > 
                {/* Button shine effect */}
                <div className='absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shine_3s_ease-in-out_infinite]'></div>
                
                Start Creating
                <motion.img 
                    className='h-6' 
                    src={assets.star_group} 
                    alt=''
                    animate={{rotate: [0, 10, -10, 0]}}
                    transition={{duration: 2, repeat: Infinity, repeatDelay: 2}}
                />
            </motion.button>

            {/* Professional Feature Grid */}
            <motion.div 
               initial={{opacity:0}} animate={{ opacity:1 }} transition={{delay:1, duration:1}}
            className='flex flex-wrap justify-center mt-16 gap-4'>
                {Array(6).fill('').map((item, index) => (
                    <motion.div
                        key={index}
                        className='relative group cursor-pointer'
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100'></div>
                        <motion.img 
                            className='relative rounded-xl shadow-lg border-2 border-gray-100 max-sm:w-12 group-hover:border-blue-200 transition-all duration-300'
                            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                            alt='' 
                            width={80} 
                            height={80}
                        />
                        {/* Overlay with feature labels */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-2'>
                            <span className='text-white text-xs font-medium'>
                                {index < 2 ? 'AI Generated' : index < 4 ? 'BG Removed' : 'Object Erased'}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Enhanced Professional Trust Indicators */}
            <motion.div className='mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm px-4'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.2, duration: 0.8}}
            >
                <div className='flex items-center gap-1.5 sm:gap-2 bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-100'>
                    <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='text-green-700 font-medium whitespace-nowrap'>Enterprise Quality</span>
                </div>
                <div className='flex items-center gap-1.5 sm:gap-2 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-100'>
                    <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse'></div>
                    <span className='text-blue-700 font-medium whitespace-nowrap'>4K Resolution</span>
                </div>
                <div className='flex items-center gap-1.5 sm:gap-2 bg-purple-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-100'>
                    <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse'></div>
                    <span className='text-purple-700 font-medium whitespace-nowrap'>BG removal</span>
                </div>
                <div className='flex items-center gap-1.5 sm:gap-2 bg-orange-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-100'>
                    <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse'></div>
                    <span className='text-orange-700 font-medium whitespace-nowrap'>object removal</span>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Header