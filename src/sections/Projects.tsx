import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import villamarRewards from "../assets/villamarRewards.jpeg";
import { useState } from "react";

const Projects = () => {
   const [isHover, setIsHover] = useState(false);

   return (
      <div className={`${styles.yPaddings} min-h-[700px]`}>
         <p className="text-center text-white font-semibold font-Roboto_slab text-[30px]">
            Proyectos Recientes
         </p>

         <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
         >
            <Swiper
               navigation={true}
               modules={[Navigation]}
               loop={true}
               className="h-[600px] mt-[20px]"
            >
               <SwiperSlide className="flex items-center justify-center">
                  <div className="w-full h-full bg-opacityBlack absolute"></div>
                  <img
                     className="w-[60%]"
                     src={villamarRewards}
                     alt="Project-1-image"
                  />

                  <div
                     className={`bg-blue-600 absolute py-3 px-5 rounded-[10px] right-60 bottom-40 border-[1px] border-white
                      transition-all duration-[1000ms] ${
                         isHover ? "opacity-100" : "opacity-0"
                      }`}
                  >
                     <p className="text-white">Más información</p>
                  </div>
                  <div
                     className={`w-full absolute p-2 bg-opacityBlack bottom-0  transition-all duration-[1000ms] ${
                        isHover ? "opacity-100" : "opacity-0"
                     }`}
                  >
                     <p className="text-white text-center font-Roboto_slab font-semibold text-[50px]">
                        VILLAMAR REWARDS
                     </p>
                  </div>
               </SwiperSlide>
               <SwiperSlide>slide2</SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

export default Projects;
