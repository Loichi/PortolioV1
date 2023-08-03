import React from "react";
import Title from "../components/Title";
import PricipingPlanList from "../components/Pricing-plans/PricipingPlanList";

export default function PricingPlan() {
  return (
    <div className="bg-slate-100 flex justify-center items-center " style={{height: "80vh"}}>
      <div className="w-9/12 h-5/6">
        <Title title={"Pricing Plans"} />
        <PricipingPlanList/>
      </div>
    </div>
  );
}
