import React from 'react'
import PricingPlanItem from './PricingPlanItem'

export default function PricipingPlanList() {
  return (
    <div className='w-full lg:h-3/4 md:h-full flex justify-center mt-10 '>
<PricingPlanItem imageUrl={"ampoule.jpg"} title={"Basic"} textTwo={"Email Support"} price={"$9 Month"}/>
<PricingPlanItem imageUrl={"prenium.png"} title={"Prenium"} textTwo={"Mon-Fri Support"} price={"$49 Month"}/>
<PricingPlanItem imageUrl={"rocket.jpg"} title={"Ultimate"} textTwo={"24/7 Support"} price={"$99 Month"}/>

 
     </div>
  )
}
