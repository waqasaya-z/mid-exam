import { useState } from "react"

const Dropdown = ({data}) => {
    const [city, setSearchCity] = useState('')

  console.log(city)

  return (
    <>
  <div className="dropdown">
<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 City
</button>
<ul className="dropdown-menu">
  {data.map(items => 
      <li key={items.id} onClick={(e) => setSearchCity(e.target)} value={items.city}>{items.city}</li>
)
  }
</ul>
</div>
    </>
  )
}

export default Dropdown

