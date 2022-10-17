import "./Popup.css";
import closeButton from "../../images/close-button.svg";

const Popup = ({ isShown, togglePopup, character }) => {
  return (
    <div className={isShown ? "popup" : "popup_hidden"}>
      <div className="popup-card">
        <img src={character.image} alt={`${character.name} avatar`} className="popup-card__image"></img>
        <h2 className="popup-card__title">{character.name}</h2>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Status:&nbsp;</span>
          {character.status}
        </p>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Species:&nbsp;</span>
          {character.species}
        </p>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Gender:&nbsp;</span>
          {character.gender}
        </p>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Origin:&nbsp;</span>
          {character.origin.name}
        </p>
        <p className="popup-card__text">
          <span className="popup-card__text popup-card__text_accent">Location:&nbsp;</span>
          {character.location.name}
        </p>
        <img
          src={closeButton}
          alt="close button"
          className="popup-card__close-button"
          onClick={() => togglePopup(false)}
        ></img>
      </div>
    </div>
  );
};

export default Popup;
