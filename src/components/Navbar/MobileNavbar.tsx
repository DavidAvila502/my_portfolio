import { useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

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
         type: "spring",
         stiffness: 400,
         damping: 40,
      },
   },
};

const MobileNavbar = () => {
   const [isOpen, steIsOpen] = useState(false);

   const handleIsOpen = () => {
      steIsOpen(!isOpen);

      isOpen
         ? (document.body.style.overflow = "auto")
         : (document.body.style.overflow = "hidden");
   };
   return (
      <motion.nav
         initial={false}
         animate={isOpen ? "open" : "closed"}
         className="absolute top-0 right-0 bottom-0 w-full sm:hidden"
      >
         <motion.div
            className={`z-[4] absolute top-0 left-0 bottom-0  bg-[#111313] w-full `}
            variants={sidebar}
         >
            <ul className="flex flex-col h-[100vh] items-center justify-center gap-6">
               <li>
                  <a
                     href="#skills"
                     className="text-white font-Roboto_slab font-semibold text-[20px]"
                     onClick={() => handleIsOpen()}
                  >
                     Habilidades
                  </a>
               </li>

               <li>
                  <a
                     href="#technologies"
                     className="text-white font-Roboto_slab font-semibold text-[20px]"
                     onClick={() => handleIsOpen()}
                  >
                     Tecnologías
                  </a>
               </li>

               <li>
                  <a
                     href="#projects"
                     className="text-white font-Roboto_slab font-semibold text-[20px]"
                     onClick={() => handleIsOpen()}
                  >
                     Proyectos
                  </a>
               </li>

               <li>
                  <a
                     href="#contact"
                     className="text-white font-Roboto_slab font-semibold text-[20px]"
                     onClick={() => handleIsOpen()}
                  >
                     Contacto
                  </a>
               </li>
            </ul>
            <MenuToggle toggle={() => handleIsOpen()} />
         </motion.div>
      </motion.nav>
   );
};

export default MobileNavbar;
