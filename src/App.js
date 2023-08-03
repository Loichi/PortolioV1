import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Service from "./pages/Service";
import RecentProject from "./pages/RecentProject";
import Experience from "./pages/Experience";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import PricingPlans from "./pages/PricingPlan";
import AllApp from "./pages/AllApp";

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' Component={AllApp}></Route>   
    <Route path='/landing-page' Component={LandingPage}></Route>   
    <Route path='/service' Component={Service}></Route>   
    <Route path='/recent-project' Component={RecentProject}></Route> 
    <Route path='/experience' Component={Experience}></Route>
    <Route path='/about-me' Component={AboutMe}></Route>
    <Route path='/contact' Component={Contact}></Route> 
    <Route path='/pricing-plans' Component={PricingPlans}></Route> 
</Routes>


</Router>
  );
}

export default App;
