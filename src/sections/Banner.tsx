import { CustomButton } from "../components";
import ProgramerGif from "../assets/programmer_gif.gif";
import githubIcon from "../assets/githubIcon.svg";
import whatsAppIcon from "../assets/whatsappIcon.svg";
import styles from "../styles";
import { motion } from "framer-motion";
import {
   programmerImageVariants,
   textTypingStagger,
   typing,
} from "../utils/motion";

const Banner = () => {
   return (
      <div className={`min-h-[700px] ${styles.xPaddings}`}>
         {/* Banner grid */}
         <div
            className={`${styles.innerWidth} mx-auto grid grid-cols-2 min-h-[600px]
            max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-9
            `}
         >
            {/* left Side */}
            <motion.div
               initial={{ x: 200, opacity: 0 }}
               whileInView={{ x: 0, opacity: 100 }}
               transition={{ duration: 0.5 }}
               className="flex flex-col justify-center z-[2]"
            >
               <p
                  className="font-Roboto font-semibold text-softBlue text-[50px] 
               max-xl:text-[40px] max-lg:text-[30px]"
               >
                  Hola, soy
               </p>
               <p
                  className="font-Roboto_slab font-semibold text-white text-[70px]
                max-xl:text-[60px] max-lg:text-[50px]"
               >
                  DAVID AVILA
               </p>

               {/* Dinamic TypingText */}
               <motion.p
                  variants={textTypingStagger}
                  initial="hidden"
                  whileInView="show"
                  className="font-Roboto_serif text-white text-[40px]
                max-xl:text-[30px] max-lg:text-[20px]"
               >
                  {Array.from("Desarrollador Frontend Junnior.").map((i) => (
                     <motion.span variants={typing}>{i}</motion.span>
                  ))}
               </motion.p>

               {/* Buttons */}
               <div className="mt-[40px] flex gap-[10%]">
                  <CustomButton
                     name="Contacto"
                     fontColor="#2FA1EA"
                     backgroundColor="#111313"
                     borderColor="#2FA1EA"
                  />
                  <CustomButton name="Proyectos" backgroundColor="#fff" />
               </div>

               {/* Social box */}

               <div
                  className="mt-[40px] flex flex-row justify-between pb-3 border-b-[1px]
                border-b-white max-w-[120px]"
               >
                  <div className="bg-white rounded-[100%] p-[5px]">
                     <img
                        src={githubIcon}
                        alt="github icon"
                        className="h-[40px]"
                     />
                  </div>

                  <div className="bg-white rounded-[100%] p-[5px]">
                     <img
                        src={whatsAppIcon}
                        alt="whatsApp icon"
                        className="h-[40px]"
                     />
                  </div>
               </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
               variants={programmerImageVariants}
               initial="hidden"
               whileInView="show"
               className=" flex justify-center items-center"
            >
               <img
                  className="rounded-[100%] w-[474px] h-[442px] z-[2] 
                  max-xl:w-[374px] max-xl:h-[342px] max-lg:w-[324px] max-lg:h-[292px]"
                  src={ProgramerGif}
                  alt="Programmer gif"
               />
            </motion.div>
         </div>
      </div>
   );
};

export default Banner;
