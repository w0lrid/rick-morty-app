import { FilterButton } from "../Button/Button";
import "./Filter.css";

const Filter = ({ name, data, updateData, updatePageNumber }) => {
  return (
    <div className="filter">
      <h3 className="filter__heading">{name}</h3>
      {data.map((item, index) => (
        <FilterButton
          name={name}
          index={index}
          key={index}
          updatePageNumber={updatePageNumber}
          task={updateData}
          input={item}
        />
      ))}
    </div>
  );
};

export default Filter;
