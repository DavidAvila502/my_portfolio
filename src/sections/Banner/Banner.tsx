import { CustomButton } from "../../components";
import ProgramerGif from "../../assets/programmer_gif.gif";
import githubIcon from "../../assets/githubIcon.svg";
import whatsAppIcon from "../../assets/whatsappIcon.svg";

const Banner = () => {
   return (
      <div className="min-h-[600px]">
         {/* Banner grid */}
         <div className="max-w-[1280px] mx-auto grid grid-cols-2 h-[500px] ">
            {/* left Side */}
            <div className="flex flex-col justify-center z-[2]">
               <p className="font-Roboto font-semibold text-softBlue text-[50px]">
                  Hola, soy
               </p>
               <p className="font-Roboto_slab font-semibold text-white text-[70px]">
                  DAVID AVILA
               </p>
               <p className="font-Roboto_serif text-white text-[40px]">
                  Desarrollador Frontend Junnior.{" "}
               </p>

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
            </div>

            {/* Right Side */}
            <div className=" flex justify-center items-center">
               <img
                  className="rounded-[100%] w-[474px] h-[442px] z-[2]"
                  src={ProgramerGif}
                  alt="Programmer gif"
               />
            </div>
         </div>
      </div>
   );
};

export default Banner;
