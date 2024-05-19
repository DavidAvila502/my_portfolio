import styles from "../styles";
import { SkillCard } from "../components";
import requirementIcon from "../assets/requirement.svg";
import scalableDesignIcon from "../assets/buildingIcon.svg";
import deployIcon from "../assets/DeployIcon.svg";

const Skills = () => {
   return (
      <div className={`${styles.yPaddings} bg-darkBlue1 min-h-[600px]`}>
         <p
            className={`text-center font-Roboto font-semibold text-[30px] text-white`}
         >
            Habilidades
         </p>

         {/* Cards container */}
         <div className="flex flex-wrap justify-center items-center min-h-[500px] gap-20 mt-[20px]">
            {/* card 1 */}
            <SkillCard
               image={scalableDesignIcon}
               title="Diseño escalable"
               description="Diseño modular pensado en la escalabilidad."
            />

            {/* card 2 */}
            <SkillCard
               image={requirementIcon}
               title="Análisis de requerimientos"
               description="Análisis para desarrollar software a medida."
            />

            {/* card 3 */}
            <SkillCard
               image={deployIcon}
               title="Despliegue"
               description="Despliegue del proyecto en la web."
            />
         </div>
      </div>
   );
};

export default Skills;
