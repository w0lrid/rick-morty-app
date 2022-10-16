import { useState } from "react";
import useRickMortyData from "../../hooks/useRickMortyData";
import Popup from "../Popup/Popup";

// location, origin, type
const Character = (props) => {
  const [openPopup, setOpenPopup] = useState(false);
  const handleClick = () => {
    setOpenPopup(true);
  };

  return (
    <>
      <Popup isShown={openPopup} togglePopup={setOpenPopup} {...props} />
      <div className="character-card" onClick={handleClick}>
        <img src={props.image} alt={`${props.name} avatar`} className="character-card__image"></img>
        <h2 className="character-card__name">Name: {props.name}</h2>
      </div>
    </>
  );
};

const CharacterList = () => {
  const { rickMortyData, isLoading } = useRickMortyData();

  return (
    <div>
      {!isLoading ? (
        rickMortyData.map((character) => <Character key={character.id} {...character} />)
      ) : (
        <p>Loading Data...</p>
      )}
    </div>
  );
};

export default CharacterList;
