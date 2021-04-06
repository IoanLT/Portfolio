import React, { useState } from "react";
// Import global style
import GlobalStyle from "./components/GlobalStyle";
// Import components
import Header from "./components/Header";
// Import pages
import LandingPage from "./pages/LandingPage";
import MusicPlayer from "./pages/MusicPlayer";
import Authors from "./pages/Authors";
import JobPortal from "./pages/JobPortal";
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';
import Instabeauty from "./pages/Instabeauty";
// Import modal
import ConfirmationModal from "./components/ConfirmationModal";


function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);  
  const [showModal, setShowModal] = useState(false);  

  const location = useLocation();  

  return (
    <div className="App">
      <GlobalStyle />
      <ConfirmationModal showModal={showModal} setShowModal={setShowModal} />
      <Header 
        openMenu={openMenu} 
        setOpenMenu={setOpenMenu}
        displayMenu={displayMenu}
        setDisplayMenu={setDisplayMenu}
      />
      
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <Switch location={location} key={location.key}>
          
          <Route exact path="/">
            <LandingPage setShowModal={setShowModal} />
          </Route> 

          <Route path="/music-player">
            <MusicPlayer />
          </Route> 

          <Route path="/authors">
            <Authors />
          </Route> 

          <Route path="/job-portal">
            <JobPortal />
          </Route> 

          <Route path="/instabeauty">
            <Instabeauty />
          </Route> 

        </Switch>
      </AnimatePresence>
      
    </div>
  )
}

export default App;
