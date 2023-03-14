import "./App.css";
import Navigation from "./components/Navigation";
import Checkcomponents from "./components/Checkcomponents";
import WavyNav from "./components/WavyNav";
import SectionTwo from './components/SectionTwo';
import Footer from "./components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServiceSection from "./components/ServiceSection";
import ITServicesWork from "./components/ITServicesWork";

function App() {
  return (
    <>
    <WavyNav/>
    <SectionTwo/>
    <ServiceSection/>
    <ITServicesWork/>
      {/* <Navigation /> */}
      {/* <Checkcomponents/> */}
      <Footer />
    </>
  );
}

export default App;
