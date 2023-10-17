import React from "react";
import data from "./data";

const Table = () => {
  console.log(data);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"> Id </th>
            <th scope="col">Name</th>
            <th scope="col"> Age </th>
            <th scope="col"> city</th>
            <th scope="col"> Occupation </th>
          </tr>
        </thead>
        {data.map((items) => (
          <tbody key={items.id}>
            <tr>
              <th scope="row">{items.id}</th>
              <td>{items.name}</td>
              <td>{items.age}</td>
              <td>{items.city}</td>
              <td>{items.occupation}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default Table;
