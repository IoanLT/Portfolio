// Import global style
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
// Router
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path="/" render={(props) => <AboutUs {...props} />} />
        <Route path="/our-work" render={(props) => <OurWork {...props} />} />
        <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />   
      </Switch>
    </div>
  )
}

export default App;
