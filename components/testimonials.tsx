// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "react-intersection-observer"

// export default function Testimonials() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 },
//     },
//   }

//   const testimonials = [
//     {
//       quote:
//         "The team took the time to understand our vision and values — the final brand design truly captured who we are.",
//       author: "Beimnet Tesfaye",
//       company: "Startup Garage",
//     },
//     {
//       quote: "Fast, clean, and on point. The quick turnaround meant we could start reaching customers without delay.",
//       author: "Nazrawit Berhanu",
//       company: "Dermit CTO",
//     },
//     {
//       quote: "Unique in approach, goal-hitting in execution, and always result-focused.",
//       author: "Abel Matheos",
//       company: "Invo Cash Co-Founder",
//     },
//   ]

//   return (
//     <section id="testimonials" ref={ref} className="py-20 bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="space-y-12"
//         >
//           {/* Header */}
//           <motion.div variants={itemVariants} className="space-y-4">
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">What Our Clients Say</h2>
//           </motion.div>

//           {/* Testimonials Grid */}
//           <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ y: -10 }}
//                 className="border-2 border-yellow-400 p-8 rounded-2xl hover:bg-yellow-400/5 transition-all"
//               >
//                 <div className="mb-6">
//                   <p className="text-lg leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
//                 </div>
//                 <div className="border-t border-yellow-400 pt-4">
//                   <p className="font-bold text-yellow-400">{testimonial.author}</p>
//                   <p className="text-white/70 text-sm">{testimonial.company}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
