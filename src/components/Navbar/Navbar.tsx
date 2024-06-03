import tagIcon from "../../assets/tag.svg";
import styles from "../../styles";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
   const [isOpen, steIsOpen] = useState(false);

   const handleIsOpen = () => {
      steIsOpen(!isOpen);

      isOpen
         ? (document.body.style.overflow = "auto")
         : (document.body.style.overflow = "hidden");
   };

   const sidebar = {
      open: (height = 1000) => ({
         clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
         transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
         },
      }),
      closed: {
         clipPath: "circle(30px at 40px 40px)",
         transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
         },
      },
   };

   return (
      <nav className={`mb-[120px] max-sm:mb-[50px] ${styles.xPaddings}`}>
         <div className={`${styles.innerWidth} mx-auto max-sm:hidden`}>
            <ul
               className="flex flex-row items-center gap-[20px]
             text-white text-[18px] font-Roboto font-semibold  max-lg:text-[14px]"
            >
               <li>
                  <img src={tagIcon} alt="programmer icon" />
               </li>
               <li>
                  <a href="#contact">Contacto</a>
               </li>
               {/* <li>Sobre mi</li> */}

               <li>|</li>
               <li>
                  <a href="#skills">Habilidades</a>
               </li>
               <li>
                  <a href="#technologies">Tecnologias</a>
               </li>
               <li>
                  <a href="#projects">Proyectos</a>
               </li>
            </ul>
         </div>

         <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="absolute top-0 right-0 bottom-0 w-full sm:hidden"
         >
            <motion.div
               className={`z-[4] absolute top-0 left-0 bottom-0 bg-softBlue w-[100vw] `}
               variants={sidebar}
            >
               <ul className="flex h-[100vh] items-center justify-center">
                  <li>Hola</li>
               </ul>
               <MenuToggle toggle={() => handleIsOpen()} />
            </motion.div>
         </motion.nav>
      </nav>
   );
};

export default Navbar;

const Path = (props: any) => (
   <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
   />
);

export const MenuToggle = ({ toggle }: { toggle: (param: any) => void }) => (
   <button onClick={toggle} className="absolute top-8 left-7 z-[5]">
      <svg width="23" height="23" viewBox="0 0 23 23">
         <Path
            variants={{
               closed: { d: "M 2 2.5 L 20 2.5" },
               open: { d: "M 3 16.5 L 17 2.5" },
            }}
         />
         <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
               closed: { opacity: 1 },
               open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
         />
         <Path
            variants={{
               closed: { d: "M 2 16.346 L 20 16.346" },
               open: { d: "M 3 2.5 L 17 16.346" },
            }}
         />
      </svg>
   </button>
);
