import styles from "../styles";
import requirementIcon from "../assets/requirement.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <div className={`${styles.yPaddings} bg-darkBlue1 h-[600px]`}>
         <p
            className={`text-center font-Roboto font-semibold text-[30px] text-white`}
         >
            Habilidades
         </p>

         {/* Card container */}
         <div className="flex justify-center items-center h-full">
            {/* card 1 */}
            <motion.div
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
               }}
               className="w-[350px]"
               onMouseEnter={() => setIsExpanded(true)}
               onMouseLeave={() => setIsExpanded(false)}
            >
               <div
                  className={`flex flex-col items-center justify-center gap-5
                  bg-darkBlue2 rounded-tl-[20px] rounded-tr-[20px] rounded
                   px-4 py-12 transition-all duration-[600ms] ${
                      isExpanded
                         ? "bg-softBlue "
                         : "rounded-bl-[20px] rounded-br-[20px]"
                   }`}
               >
                  <img src={requirementIcon} alt="requirements icon" />
                  <p className="text-white font-Roboto_slab font-bold text-[25px] max-w-[200px] text-center">
                     Analisis de requerimientos
                  </p>
               </div>
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
                  >
                     Analisis para desarrolar software a medida
                  </motion.p>
               </motion.div>
            </motion.div>
         </div>
      </div>
   );
};

export default Skills;
