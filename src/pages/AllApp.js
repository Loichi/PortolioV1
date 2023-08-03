import React from 'react'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Service from './Service'
import Experience from './Experience'
import RecentProject from './RecentProject'
import PricingPlan from './PricingPlan'
import Contact from './Contact'
export default function AllApp() {
  return (
    <div>

    <LandingPage/>
    <AboutMe/>
    <Service/>
    <Experience/>
    <RecentProject/>
    <PricingPlan/>
    <Contact/>
    </div>
  )
}
