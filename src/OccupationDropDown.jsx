
const OccupationDropDown = ({data, handleCity}) => {
    return (
      <>
      <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     Occupation
    </button>
    <ul class="dropdown-menu">
      {data.map(items => 
          <li onClick={handleCity} value={items.city}>{items.occupation}</li>
    )
      }
    </ul>
  </div>
      </>
    )
  }
  
  export default OccupationDropDown