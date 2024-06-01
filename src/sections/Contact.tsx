import styles from "../styles";
import emailImage from "../assets/email-image.svg";
import copiRightIcon from "../assets/copyrightIcon.svg";
import whatsappIcon from "../assets/whatsappIcon.svg";
import telegramIcon from "../assets/telegram.svg";
import githubIcon from "../assets/githubIcon.svg";

const Contact = () => {
   return (
      <div
         id="Contact"
         className={`${styles.yPaddings} ${styles.xPaddings} min-h-[600px]`}
      >
         <p
            className={`text-center font-Roboto font-semibold text-[30px] text-white mb-[20px]`}
         >
            Contacto
         </p>

         <div
            className={`grid grid-cols-2 h-[500px] mx-auto ${styles.innerWidth} max-sm:flex flex-col justify-center items-center gap-9`}
         >
            {/* Right side */}
            <div className="flex flex-col justify-between gap-10">
               <div className="flex flex-row gap-8">
                  <div>
                     <p className="font-Roboto_slab text-softBlue font-semibold text-[25px]">
                        Directo:
                     </p>

                     <div className="mt-[10px] flex flex-col gap-5">
                        <div className="flex flex-row items-center gap-2">
                           <div className="rounded-full bg-white p-1">
                              <img
                                 className="h-[32px]"
                                 src={whatsappIcon}
                                 alt="whatsapp.svg"
                              />
                           </div>
                           <p className="font-Roboto_slab font-semibold text-[20px] text-white">
                              Whatsapp
                           </p>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                           <div className="rounded-full bg-white p-1">
                              <img
                                 className="h-[32px]"
                                 src={telegramIcon}
                                 alt="telegram.svg"
                              />
                           </div>
                           <p className="font-Roboto_slab font-semibold text-[20px] text-white">
                              Telegram
                           </p>
                        </div>
                     </div>
                  </div>

                  <div>
                     <p className="font-Roboto_slab text-softBlue font-semibold text-[25px]">
                        Perfiles:
                     </p>

                     <div className="flex flex-row items-center gap-2 mt-[10px]">
                        <div className="rounded-full bg-white p-1">
                           <img
                              className="h-[32px]"
                              src={githubIcon}
                              alt="github.svg"
                           />
                        </div>
                        <p className="font-Roboto_slab font-semibold text-[20px] text-white">
                           Github
                        </p>
                     </div>
                  </div>
               </div>

               <div className="flex flex-row gap-2">
                  <img src={copiRightIcon} alt="CopyrightIcon.svg" />
                  <p className="text-white font-Roboto text-[18px] font-semibold max-sm:text-[12px]">
                     2024 David Avila Todos los derechos reservados.
                  </p>
               </div>
            </div>

            {/* Left Side */}
            <div className="flex items-center justify-center">
               <img src={emailImage} alt="email-image.svg" />
            </div>
         </div>
      </div>
   );
};

export default Contact;
