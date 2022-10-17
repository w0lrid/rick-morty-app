import { useEffect, useState } from "react";
import Character from "../Character/Character";
import Filters from "../Filters/Filters";
import Search from "../Search/Search";
import "./CharacterList.css";

const CharacterList = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [type, updateType] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}&type=${type}`;

  const loadMore = async () => {
    const data = await fetch(info.next).then((res) => res.json());
    updateFetchedData(data);
    setCharacters((previousCharacters) => [...previousCharacters, ...data.results]);
  };

  useEffect(() => {
    async function fetcher() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      setCharacters(data.results);
    }
    fetcher();
  }, [api]);

  return (
    <>
      <div className="filters">
        <div className="search-block">
          <Search type="name" setSearch={setSearch} updatePageNumber={updatePageNumber} />
          <Search type="type" setSearch={updateType} updatePageNumber={updatePageNumber} />
        </div>
        <Filters
          pageNumber={pageNumber}
          status={status}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
        />
      </div>
      <div className="list">
        {characters && characters.map((character) => <Character key={character.id} character={character} />)}
        {!results && <>No Characters found</>}
        {characters?.length >= 20 && (
          <button className="list__button" onClick={() => loadMore()}>
            load more
          </button>
        )}
      </div>
    </>
  );
};

export default CharacterList;
