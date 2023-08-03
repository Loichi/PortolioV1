import React from "react";

import ServiceListItem from "../components/Service/ServiceListItem";
import { Link } from "react-router-dom";
//Icons
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DrawIcon from "@mui/icons-material/Draw";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Title from "../components/Title";

export default function Service() {
  return (
    <div
      className="bg-slate-100 flex justify-center items-center pt-20"
      style={{ height: "80vh" }}
    >
      <div className="w-9/12 h-5/6">
        <Title title="Services" />
        <div className="lg:w-4/5 md:w-8/10 h-4/6 mx-auto flex justify-evenly items-center pt-10 ">
          <ServiceListItem
            color={"blue"}
            icon={<DrawIcon fontSize="large" />}
            title={"UI/UX design"}
            delay={0.2}
          />
          <ServiceListItem
            color={"yellow"}
            icon={<FolderOpenIcon fontSize="xx-large" />}
            title={"Web Development"}
            delay={0.4}
          />
          <ServiceListItem
            color={"red"}
            icon={<CameraAltIcon fontSize="xx-large" />}
            title={"Photography"}
            delay={0.6}
          />
        </div>
        <div className="flex justify-center">

        <p className="mx-auto pt-6 ">
          Looking for a custom job?{" "}
          <Link to="/contact" className="text-red-500">
            Click Here
          </Link>{" "}
          to contact me
        </p>
        </div>
      </div>
    </div>
  );
}
