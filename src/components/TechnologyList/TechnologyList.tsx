import { Technology } from "../../interfaces";

import { motion } from "framer-motion";
import { technologyCardVariants } from "../../utils/motion";
interface TechnologyListProps {
   list: Technology[];
   selected: Technology;
   setSelected: (param: Technology) => void;
}

const TechnologyList = ({
   list,
   selected,
   setSelected,
}: TechnologyListProps) => {
   return (
      <div className="flex flex-row  max-[900px]:justify-center flex-wrap gap-8">
         {list.map((technology, index) => (
            <motion.div
               variants={technologyCardVariants}
               key={index}
               className={`flex flex-col items-center justify-evenly rounded-[10px]
               w-[165px] h-[183px] ${
                  selected.name === technology.name
                     ? "bg-selectedBlue"
                     : "bg-opacityGray"
               }

               transition-all
               duration-[400ms]
               `}
               onMouseEnter={() => {
                  setSelected(technology);
               }}
            >
               <img
                  className="h-[70px]"
                  src={technology.Image}
                  alt={technology.name}
               />

               <p className="font-Roboto_slab font-semibold text-[20px] text-white">
                  {technology.name}
               </p>
            </motion.div>
         ))}
      </div>
   );
};

export default TechnologyList;
