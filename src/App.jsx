import "./App.css";
import Dropdown from "./Dropdown";
import Table from "./Table";
import data from "./data";
import { useState } from "react";
import OccupationDropDown from "./OccupationDropDown";

function App() {
  const [search, setSearch] = useState("");
  const [appData, setAppData] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((items) =>
    items.name
      .toString()
      .toLowerCase()
      .includes(search.toString().toLowerCase())
  );
  const filteredAge = data.filter((items) =>
    items.age.toString().toLowerCase().includes(search.toString().toLowerCase())
  );

  const handleCity = (e) => {
    const CityData = e.target.value;
    console.log(e.target.value)
    console.log(CityData)
    const arr = data.filter((items) =>
      items.city
        .toString()
        .toLowerCase()
        .includes(CityData.toString().toLowerCase())
    );
   
    return arr;
  };

  // const filteredAge = data.filter(items => items.age == parseInt(search))
  // console.log(filteredAge)

  return (
    <>
    <div className="d-flex flex-row p-8 mt-10">

      <input onChange={handleChange} placeholder="Enter Age or name to filter" className="w-50" />
      <Dropdown data={data} handleCity={handleCity} />
      <OccupationDropDown data={data} />
    </div>
      <h1> Table </h1>
      <Table filteredData={filteredData} />
    </>
  );
}

export default App;
