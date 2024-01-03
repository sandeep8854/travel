import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import contactImage from "../assets/04.jpg";
import ContactForm from "../component/ContactForm";
import FooterSec from "../component/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImage}
        title="Contact"
        url="/"
        btnClass="hide"
      />
      <ContactForm />
      <FooterSec />
    </>
  );
};

export default Contact;
