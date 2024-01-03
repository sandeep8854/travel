import "./destinationStyles.css";

const DestinationData = (props) => {
  return (
    <div>
      <div className={props.className}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img alt="image not found" src={props.img1} />
          <img alt="image not found" src={props.img2} />
        </div>
      </div>
    </div>
  );
};

export default DestinationData;
