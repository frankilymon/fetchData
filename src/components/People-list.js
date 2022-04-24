import React from "react";
import PeopleItem from "./People-item";

const PeopleList = ({ data }) => {
  return (
    <React.Fragment>
      {data.length > 0 ? (
        data.map((person) => (
          <PeopleItem
            key={person.birth_year + person.name}
            name={person.name}
          />
        ))
      ) : (
        <h5>no data</h5>
      )}
    </React.Fragment>
  );
};

export default PeopleList;
