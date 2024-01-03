import TripData from "./TripData";
import "./tripStyled.css";
import t1 from "../assets/t-1.jpg";
import t2 from "../assets/t-2.jpg";
import t3 from "../assets/t-3.jpg";

const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p className="para">
          You can discover unique destinations using Google Maps.
        </p>
      </div>
      <div className="tripcard">
        <TripData
          image={t1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
        <TripData
          image={t2}
          heading="Trip in Bengalore"
          text="Bengalore, officially the Republic of India, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
        <TripData
          image={t3}
          heading="Trip in Mumbai"
          text="Mumbai, officially the Republic of Mumbai, is a country in India Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
      </div>
    </>
  );
};

export default Trip;
