import "./Popup.css";
import closeButton from "../../images/close-button.svg";

const Popup = (props) => {
  return (
    <div className={props.isShown ? "popup" : "popup_hidden"}>
      <div className="popup-card">
        <img src={props.image} alt={`${props.name} avatar`} className="popup-card__image"></img>
        <h2 className="popup-card__title">{props.name}</h2>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Status:&nbsp;</span>
          {props.status}
        </p>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Species:&nbsp;</span>
          {props.species}
        </p>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Gender:&nbsp;</span>
          {props.gender}
        </p>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Origin:&nbsp;</span>
          {props.origin}
        </p>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Location:&nbsp;</span>
          {props.location}
        </p>
        <img
          src={closeButton}
          alt="close button"
          className="popup-card__close-button"
          onClick={() => props.togglePopup(false)}
        ></img>
      </div>
    </div>
  );
};

export default Popup;
