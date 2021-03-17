// Import global style
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Switch>
        {/* <Route exact path="/" render={(props) => <AboutUs {...props} />} />
        <Route exact path="/our-work" render={(props) => <OurWork {...props} />} />
        <Route exact path="/work/:id" render={(props) => <MovieDetail {...props} />} />
        <Route exact path="/contact-us" render={(props) => <ContactUs {...props} />} />  */}
          
        <Route exact path="/">
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
        </Route>   
           
      </Switch>
    </div>
  )
}

export default App;
