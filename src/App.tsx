import ballsBackground from "./assets/CIRCLE BACKGROUND.svg";
import { Navbar } from "./components";
import { Banner, Skills } from "./sections";
import Tetchnologies from "./sections/Technologies";

const App = () => {
   return (
      // Main container
      <div
         className="min-h-[100vh] pt-[100px] overflow-y-hidden
         bg-gradient-to-l from-[#0F2027] via-[#203A43] to-[#2C5364]"
      >
         <img
            src={ballsBackground}
            alt="bubble background"
            className="absolute right-0 top-0 z-[1]"
         />

         <Navbar />
         <Banner />
         <Skills />
         <Tetchnologies />
      </div>
   );
};

export default App;
