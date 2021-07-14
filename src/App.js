import React, { useEffect, useState, useLayoutEffect } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
// import Rentals from "./pages/Blog";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import Blog from "./pages/Blog";
import History from "./pages/History";
import Thanksgiving from "./pages/Thanksgiving";
import FengShui from "./pages/FengShui";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/blog" component={Blog} />
        <Route path="/history" component={History} />
        <Route path="/contact" component={Contact} />
        <Route path="/Thanksgiving" component={Thanksgiving} />
        <Route path="/FengShui" component={FengShui} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
