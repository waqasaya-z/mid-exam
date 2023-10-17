import "./App.css";
import Dropdown from "./Dropdown";
import Table from "./Table";
import data from "./data";
import { useState } from "react";

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
      <input onChange={handleChange} />
      <Dropdown data={data} handleCity={handleCity} />
      <h1> Table </h1>
      <Table filteredData={filteredData} />
    </>
  );
}

export default App;
