// import { Card, CardContent } from "@/components/ui/card";
// import { Star, Quote } from "lucide-react";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Sarah Mitchell",
//       company: "TechFlow Solutions",
//       location: "Toronto, ON",
//       rating: 5,
//       text: "Clean Spark has transformed our office environment. Their weekly cleaning service is thorough, reliable, and our employees love coming to a spotless workspace every Monday morning."
//     },
//     {
//       name: "Dr. Michael Chen",
//       company: "Oakville Medical Clinic",
//       location: "Oakville, ON",
//       rating: 5,
//       text: "The electrostatic disinfection service has been a game-changer for our clinic. Patients feel safer, and we have complete confidence in the hygiene standards they maintain."
//     },
//     {
//       name: "Jennifer Rodriguez",
//       company: "Hamilton Retail Group",
//       location: "Hamilton, ON",
//       rating: 5,
//       text: "Professional, punctual, and incredibly detailed. Clean Spark's janitorial team keeps our retail spaces immaculate. Their supply restocking service is a huge time-saver too!"
//     }
//   ];

//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Don't just take our word for it – hear from businesses across the GTA who trust Clean Spark
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <Card 
//               key={index} 
//               className="relative hover:shadow-clean transition-all duration-300 transform hover:-translate-y-2 group"
//             >
//               <CardContent className="p-6">
//                 <div className="absolute top-4 right-4 text-brand-blue-light group-hover:text-brand-blue transition-colors duration-300">
//                   <Quote className="h-8 w-8" />
//                 </div>
                
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
                
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   "{testimonial.text}"
//                 </p>
                
//                 <div className="border-t pt-4">
//                   <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
//                   <p className="text-sm text-brand-blue font-medium">{testimonial.company}</p>
//                   <p className="text-sm text-muted-foreground">{testimonial.location}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
