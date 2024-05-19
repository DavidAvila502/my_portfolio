import { motion } from "framer-motion";
import { useState } from "react";

interface SkillCardProps {
   image: string;
   title: string;
   description: string;
}

const SkillCard = ({ image, title, description }: SkillCardProps) => {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      // Card container
      <motion.div
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
         }}
         className="w-[350px] max-md:w-[320px]"
         onMouseEnter={() => setIsExpanded(true)}
         onMouseLeave={() => setIsExpanded(false)}
      >
         {/* Title and Icon */}
         <div
            className={`flex flex-col items-center justify-center gap-5
               bg-darkBlue2 rounded-tl-[20px] rounded-tr-[20px] h-[280px]
               transition-all duration-[600ms] ${
                  isExpanded
                     ? "bg-softBlue "
                     : "rounded-bl-[20px] rounded-br-[20px]"
               }`}
         >
            <img src={image} alt="Skill icon" />
            <p className="text-white font-Roboto_slab font-bold text-[25px] max-w-[200px] text-center">
               {title}
            </p>
         </div>

         {/* Description */}
         <motion.div
            initial={{
               height: 0,
               opacity: 0,
            }}
            animate={{
               height: isExpanded ? "150px" : 0,
               opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`flex items-center justify-center bg-white text-center text-[25px] rounded-bl-[20px] rounded-br-[20px]`}
         >
            <motion.p
               initial={{
                  opacity: 0,
                  height: 0,
               }}
               animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
               }}
               className="max-w-[300px] font-Roboto_mono text-[20px]"
            >
               {description}
            </motion.p>
         </motion.div>
      </motion.div>
   );
};

export default SkillCard;
