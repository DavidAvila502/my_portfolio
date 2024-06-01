import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProjectConstant from "../constants/ProjectsConstant";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
   const [isHover, setIsHover] = useState(false);

   return (
      <div id="projects" className={`${styles.yPaddings} min-h-[700px]`}>
         <p className="text-center text-white font-semibold font-Roboto_slab text-[30px]">
            Proyectos Recientes
         </p>

         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`max-w-[2368px] mx-auto`}
         >
            <Swiper
               navigation={true}
               modules={[Navigation]}
               loop={true}
               className="h-[600px] mt-[20px]"
            >
               {ProjectConstant.map((currentProject, index) => (
                  <SwiperSlide
                     className="flex items-center justify-center"
                     key={index}
                  >
                     <div className="w-full h-full bg-opacityBlack absolute"></div>
                     <img
                        className="w-[60%] max-lg:w-[90%]"
                        src={currentProject.image}
                        alt={`${currentProject.name}.jpeg`}
                     />

                     <a
                        href={currentProject.url}
                        target="_blank"
                        className={`bg-blue-600 absolute py-3 px-5 rounded-[10px]
                         right-60 max-lg:right-2 bottom-40 border-[1px] border-white cursor-pointer
                           transition-all duration-[1000ms] ${
                              isHover ? "opacity-100" : "opacity-0"
                           }`}
                     >
                        <p className="text-white">Ir al sitio</p>
                     </a>
                     <div
                        className={`w-full absolute p-2 bg-opacityBlack bottom-0  transition-all duration-[1000ms] ${
                           isHover ? "opacity-100" : "opacity-0"
                        }`}
                     >
                        <p className="text-white text-center font-Roboto_slab font-semibold text-[50px] max-sm:text-[35px]">
                           {currentProject.name}
                        </p>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </motion.div>
      </div>
   );
};

export default Projects;
