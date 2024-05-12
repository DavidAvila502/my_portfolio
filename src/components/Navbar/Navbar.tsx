import tagIcon from "../../assets/tag.svg";
import styles from "../../styles";

const Navbar = () => {
   return (
      <div className={`mb-[120px] ${styles.xPaddings}`}>
         <div className={`${styles.innerWidth} mx-auto`}>
            <ul
               className="flex flex-row items-center gap-[20px]
             text-white text-[18px] font-Roboto font-semibold"
            >
               <li>
                  <img src={tagIcon} alt="programmer icon" />
               </li>
               <li>Contacto</li>
               <li>Sobre mi</li>

               <li>|</li>
               <li>Habilidades</li>
               <li>Tecnologias</li>
               <li>Proyectos</li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
