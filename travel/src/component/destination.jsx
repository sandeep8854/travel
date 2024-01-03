import DestinationData from "./DestinationData";
import "./destinationStyles.css";
import desc1 from "../assets/desc1.jpg";
import desc2 from "../assets/desc2.jpg";
import desc3 from "../assets/desc3.jpg";
import desc4 from "../assets/desc4.jpg";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p className="pTag">
        Tours give you the opportunity to see a lot, within a time frame.
      </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
        img1={desc1}
        img2={desc2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
        img1={desc3}
        img2={desc4}
      />
    </div>
  );
};

export default Destination;
