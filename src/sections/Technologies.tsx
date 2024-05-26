import TechnologyList from "../components/TechnologyList/TechnologyList";
import styles from "../styles";
import { TechnologiesConstants } from "../constants";
import { useState } from "react";

const Technologies = () => {
   const [selectedTechnology, setSelectedTechnology] = useState(
      TechnologiesConstants[0]
   );
   return (
      <div
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
            <div className="grid max-[900px]:grid-cols-1 grid-cols-2 h-[600px]">
               {/* Right section */}
               <div>
                  <TechnologyList
                     list={TechnologiesConstants}
                     selected={selectedTechnology}
                     setSelected={setSelectedTechnology}
                  />
               </div>
               {/* Lefth section */}
               <div className="border-l-[#757575] border-l-2 max-[900px]:hidden"></div>
            </div>
         </div>
      </div>
   );
};

export default Technologies;
