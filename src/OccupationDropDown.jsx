
const OccupationDropDown = ({data, handleCity}) => {
    return (
      <>
      <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     Occupation
    </button>
    <ul className="dropdown-menu">
      {data.map(items => 
          <li key={items.id}  onClick={handleCity} value={items.occupation}>{items.occupation}</li>
    )
      }
    </ul>
  </div>
      </>
    )
  }
  
  export default OccupationDropDown