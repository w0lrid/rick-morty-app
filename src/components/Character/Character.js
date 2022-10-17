import { useState } from "react";

import Popup from "../Popup/Popup";

import "./Character.css";

const Character = ({ character }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const handleClick = () => {
    setOpenPopup(true);
  };

  return (
    <>
      <Popup isShown={openPopup} togglePopup={setOpenPopup} character={character} />
      <div className="character" onClick={handleClick}>
        <h2 className="character__name">{character.name}</h2>
      </div>
    </>
  );
};

export default Character;
