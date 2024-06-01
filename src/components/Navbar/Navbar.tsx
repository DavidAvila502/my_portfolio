import tagIcon from "../../assets/tag.svg";
import styles from "../../styles";

const Navbar = () => {
   return (
      <div className={`mb-[120px] ${styles.xPaddings}`}>
         <div className={`${styles.innerWidth} mx-auto max-sm:hidden`}>
            <ul
               className="flex flex-row items-center gap-[20px]
             text-white text-[18px] font-Roboto font-semibold  max-lg:text-[14px]"
            >
               <li>
                  <img src={tagIcon} alt="programmer icon" />
               </li>
               <li>Contacto</li>
               <li>Sobre mi</li>

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
      </div>
   );
};

export default Navbar;
