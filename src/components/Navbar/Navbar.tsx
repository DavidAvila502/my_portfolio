import tagIcon from "../../assets/tag.svg";
import styles from "../../styles";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
   return (
      <div className={`mb-[120px] max-sm:mb-[50px] ${styles.xPaddings}`}>
         <nav className={`${styles.innerWidth} mx-auto max-sm:hidden`}>
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
         </nav>

         <MobileNavbar />
      </div>
   );
};

export default Navbar;
