import React, { useState } from "react";
// Import global style
import GlobalStyle from "./components/GlobalStyle";
// Import components
import Header from "./components/Header";
// Import pages
import LandingPage from "./pages/LandingPage";
import MusicPlayer from "./pages/MusicPlayer";
// import ContactUs from "./pages/ContactUs";
// import MovieDetail from "./pages/MovieDetail";
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';
import Projects from "./components/Projects";



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
          <Route exact path="/" render={(props) => <LandingPage {...props} />} />
          <Route exact path="/music-player" render={(props) => <MusicPlayer {...props} />} />
          {/* <Route exact path="/projects" render={(props) => <Projects {...props} />} /> */}
         
            
          {/* <Route exact path="/">
            <AboutUs />
          </Route> 

          <Route path="/our-work">
            <MusicPlayer />
          </Route> 

          <Route path="/work/:id">
            <MovieDetail />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>    */}
            
        </Switch>
      </AnimatePresence>
      
    </div>
  )
}

export default App;
