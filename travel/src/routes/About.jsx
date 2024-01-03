import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import aboutImage from "../assets/02.jpg";
import AboutUs from "../component/AboutUs";
import FooterSec from "../component/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImage}
        title="About"
        url="/"
        btnClass="hide"
      />
      <AboutUs />
      <FooterSec />
    </>
  );
};

export default About;
