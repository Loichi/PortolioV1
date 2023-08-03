import React from "react";
import Title from "../components/Title";
import RecentWorkNav from "../components/RecentWorks/RecentWorkNav";
import RecentWorkList from "../components/RecentWorks/RecentWorkList";

export default function RecentProject() {
  return (
    <div
      className="bg-slate-100 flex justify-center items-center pt-10"
      style={{ height: "80vh" }}
    >
      <div className="w-9/12 h-5/6">
        <Title title="Recent Works" />
      <div className="h-full">

        <RecentWorkNav />
        <RecentWorkList />
        </div>
      </div>
    </div>
  );
}
