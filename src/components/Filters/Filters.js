import React from "react";

import { species, status, genders } from "../../config/filters-data.config";

import Filter from "./components/Filter/Filter";

import "./Filters.css";

const Filters = ({ updatePageNumber, updateStatus, updateGender, updateSpecies }) => {
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  return (
    <>
      <div className="filters__header">
        <h2 className="filters__heading">Filters</h2>
        <button className="filters__clear-button" onClick={clear}>
          Clear Filters
        </button>
      </div>
      <div>
        <Filter name="status" data={status} updateData={updateStatus} updatePageNumber={updatePageNumber} />
        <Filter name="species" data={species} updateData={updateSpecies} updatePageNumber={updatePageNumber} />
        <Filter name="genders" data={genders} updateData={updateGender} updatePageNumber={updatePageNumber} />
      </div>
    </>
  );
};

export default Filters;
