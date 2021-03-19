// Import global style
import GlobalStyle from "./components/GlobalStyle";
// Import components
import Header from "./components/Header";
// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" render={(props) => <AboutUs {...props} />} />
          <Route exact path="/our-work" render={(props) => <OurWork {...props} />} />
          <Route exact path="/work/:id" render={(props) => <MovieDetail {...props} />} />
          <Route exact path="/contact-us" render={(props) => <ContactUs {...props} />} /> 
            
          {/* <Route exact path="/">
            <AboutUs />
          </Route> 

          <Route path="/our-work">
            <OurWork />
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
