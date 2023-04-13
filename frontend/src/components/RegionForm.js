import { useState } from 'react'

const RegionForm = () => {

  const [region, setRegion] = useState('')
  const test = "hello"

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    console.log(test)
  } 

  return (
    <form className="region-form" onSubmit={handleSubmit}> 
      <h3>Search by Region 📍</h3>
      <select 
        id="region"
        name="region" 
        onChange={(e) => setRegion(e.target.value)} 
        value={region}
        >
          <option>All</option>  
          <option value="sw">South West</option>
          <option value="se">Midlands</option>
          <option value="m">Midlands</option>
          <option value="nw">North West</option>
          <option value="ne">North East</option>
          <option value="s">Scotland</option>
          <option value="w">Wales</option>
      </select>
      <button>Go!</button>
    </form>
  )
}

export default RegionForm