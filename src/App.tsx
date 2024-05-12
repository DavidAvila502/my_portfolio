import { Banner } from "./sections";
import ballsBackground from "./assets/CIRCLE BACKGROUND.svg";
const App = () => {
   return (
      // Main container
      <div
         className="min-h-[100vh]
         pt-[200px]
         bg-gradient-to-l from-[#0F2027] via-[#203A43] to-[#2C5364]"
      >
         <img
            src={ballsBackground}
            alt=""
            className="absolute right-0 top-0 z-[1]"
         />
         <Banner />
      </div>
   );
};

export default App;
