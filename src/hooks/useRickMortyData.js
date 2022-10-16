const { useState, useEffect } = require("react");

const useRickMortyData = () => {
  const [rickMortyData, setRickMortyData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const preparedData = [];

        data.results.forEach((character) => {
          const { id, gender, image, location, name, origin, species, status, type } = character;
          preparedData.push({
            id: `${id}+${name}`,
            gender,
            image,
            location: location.name,
            name,
            origin: origin.name,
            species,
            status,
            type,
          });
        });

        setRickMortyData(preparedData);
      })
      .finally(() => setLoading(false));
  }, []);

  return { rickMortyData, isLoading };
};

export default useRickMortyData;
