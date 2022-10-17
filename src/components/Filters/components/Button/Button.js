import "./Button.css";

export const FilterButton = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <label
      className="label"
      onClick={() => {
        task(input);
        updatePageNumber(1);
      }}
      for={`${name}-${index}`}
    >
      <input className="option" type="radio" name={name} id={`${name}-${index}`} />
      <span className="visible-option">{input}</span>
    </label>
  );
};
