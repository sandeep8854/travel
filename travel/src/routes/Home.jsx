import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import heroImg from "../assets/01.1.jpg";
import "../component/heroStyles.css";
import Destination from "../component/destination";
import Trip from "../component/Trip";
import FooterSec from "../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <FooterSec />
    </>
  );
};

export default Home;
