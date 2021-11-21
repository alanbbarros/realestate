import NavBar from "./components/NavBar";
import GlobalStyle from './globalStyle'
import Hero from './components/Hero'
import Dropdown from './components/Dropdown'
import { useState } from "react";
import Infosection from "./components/Infosection";
import { InfoData } from "./data/InfoData";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Infosection {...InfoData} />
    </>
  );
}

export default App;
