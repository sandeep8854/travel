import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import serviceImage from "../assets/03.jpg";
import Trip from "../component/Trip";
import FooterSec from "../component/Footer";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={serviceImage}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <FooterSec />
    </>
  );
};

export default Service;
