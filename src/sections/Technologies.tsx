import TechnologyList from "../components/TechnologyList/TechnologyList";
import styles from "../styles";
import { TechnologiesConstants } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import { technologyListStagger } from "../utils/motion";

const Technologies = () => {
   const [selectedTechnology, setSelectedTechnology] = useState(
      TechnologiesConstants[0]
   );

   return (
      <div
         id="technologies"
         className={`${styles.yPaddings} ${styles.xPaddings} min-h-[700px]`}
         style={{
            background: `linear-gradient(to top, ${selectedTechnology.rgbaColor}, rgba(17, 19, 19, 0.3), rgba(17, 19, 19, 0.3))`,
         }}
      >
         <div className={`max-w-[2368px] mx-auto`}>
            {/* Title */}
            <p
               className={`text-center font-Roboto font-semibold text-[30px] text-white mb-[20px]`}
            >
               Tecnologias
            </p>
            {/* Grid container */}
            <div className="grid max-[900px]:grid-cols-1 grid-cols-2">
               {/* Right section */}
               <motion.div
                  variants={technologyListStagger}
                  initial="hidden"
                  whileInView="show"
               >
                  <TechnologyList
                     list={TechnologiesConstants}
                     selected={selectedTechnology}
                     setSelected={setSelectedTechnology}
                  />
               </motion.div>
               {/* Lefth section */}
               <div
                  className="flex flex-col justify-center items-center  p-5 border-l-[#757575]
                  border-l-2 max-[900px]:hidden"
               >
                  <motion.div
                     className="flex flex-col justify-center items-center gap-4"
                     initial={{ y: 200, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.7 }}
                  >
                     <img
                        className="h-[90px]"
                        src={selectedTechnology.Image}
                        alt="Tecnologia"
                     />
                     <p className="font-Roboto_slab font-semibold text-[30px] text-[#7BCEF3]">
                        {selectedTechnology.name}
                     </p>
                     <p className="font-Roboto_slab font-semibold text-[30px] max-w-[400px] text-center text-white">
                        {selectedTechnology.description}
                     </p>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Technologies;
