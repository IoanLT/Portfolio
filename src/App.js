import React, { useState } from "react";
// Import global style
import GlobalStyle from "./components/GlobalStyle";
// Import components
import Header from "./components/Header";
// Import pages
import LandingPage from "./pages/LandingPage";
import MusicPlayer from "./pages/MusicPlayer";
import Authors from "./pages/Authors";
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';
// import Projects from "./components/Projects";



function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);  

  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <GlobalStyle />
      <Header 
        openMenu={openMenu} 
        setOpenMenu={setOpenMenu}
        displayMenu={displayMenu}
        setDisplayMenu={setDisplayMenu}
      />
      
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          {/* <Route exact path="/" render={(props) => <LandingPage {...props} />} /> */}
          {/* <Route exact path="/music-player" render={(props) => <MusicPlayer {...props} />} /> */}
          {/* <Route exact path="/projects" render={(props) => <Projects {...props} />} /> */}
         
            
          <Route exact path="/">
            <LandingPage />
          </Route> 

          <Route path="/music-player">
            <MusicPlayer />
          </Route> 

          <Route path="/authors">
            <Authors />
          </Route> 

          <Route path="/job-portal">
            <MusicPlayer />
          </Route> 

          <Route path="/instabeauty">
            <MusicPlayer />
          </Route> 

            
        </Switch>
      </AnimatePresence>
      
    </div>
  )
}

export default App;
