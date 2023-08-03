import React from "react";
import AproposListItem from "../components/About/AproposListItem";

//Icons
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CoffeeIcon from "@mui/icons-material/Coffee";
import Face6Icon from "@mui/icons-material/Face6";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AboutMeItem from "../components/About/AboutMeItem";
import Title from "../components/Title";

export default function AboutMe() {
  return (
    <div className="bg-slate-100 h-80vh flex justify-center items-center pt-10">
      <div className="w-9/12 h-5/6">
        <Title title={"About me"}/>
        <div className="flex justify-between  lg:w-4/5 md:w-8/10 mx-auto h-1/4 mt-20">
          <div className="bg-blue-500 rounded-full lg:h-40 lg:w-40 md:h-28 md:w-28"></div>
          <div className="bg-white w-4/5 rounded-lg flex justify-center items-center ">
            <AboutMeItem />
          </div>
        </div>

        <div className=" flex justify-between  lg:w-4/5 md:w-8/10 mx-auto h-1/4 pt-10">
          <AproposListItem
            icon={<ThumbUpOffAltIcon />}
            number={"198"}
            label={"Projects completed"}
          />
          <AproposListItem
            icon={<CoffeeIcon />}
            number={"5670"}
            label={"Cup of Coffee"}
          />
          <AproposListItem
            icon={<Face6Icon />}
            number={"427"}
            label={"Satisfied clients"}
          />
          <AproposListItem
            icon={<WorkspacePremiumIcon />}
            number={"35"}
            label={"Nominees winner"}
          />
        </div>
      </div>
    </div>
  );
}
