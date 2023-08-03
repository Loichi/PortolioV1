import {React} from "react";

import AnimatedHiText from '../components/animated-components/AnimatedHiText'


function LandingPage() {


  return (
    <div className="bg-[#343353]  lg:h-1/2 md:h-1/2">
        <div className="flex flex-col  h-[26rem] ">
          <div className="bg-blue-500 h-32 w-32 mx-auto mt-20 rounded-full"></div>
     <AnimatedHiText text={"Hi, I'm John Doe"}/>
          <p className=" text-white text-2xl font-thin mx-auto">
            I'm a UI/UX designer
          </p>
          <div className="flex justify-center">
              <button className="bg-red-500 text-white font-bold rounded-full w-48 h-10 mt-5">
                Hire Me
              </button>
          </div>
        </div>
      </div>
 
  );
}

export default LandingPage;
