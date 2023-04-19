import { useState } from 'react'
import {useRoutesContext} from "../hooks/useRoutesContext"
import {useAuthContext} from '../hooks/useAuthContext'

const RegionForm = () => {

  const {dispatch} = useRoutesContext()
  const {user} = useAuthContext()
  const [region, setRegion] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(region)
    var fetchLink = " "

    if(region===" "){
      fetchLink = '/api/routes/'
    }else{
      fetchLink = '/api/routes/region/'+region
    }

    // Fetch logic lives here
    const response = await fetch(fetchLink, {
      headers: {
        'Authorization': `Bearer ${user.token}`
    }
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'SET_ROUTES', payload: json})
    }

  } 

  return (
    <form className="region-form" onSubmit={handleSubmit}> 
      <h3>Search by Region ⛰️</h3>
      <select 
        id="region"
        name="region" 
        onChange={(e) => setRegion(e.target.value)} 
        value={region}
        >
          <option value=" ">Popular</option>  
          <option value="sw">South West</option>
          <option value="se">South East</option>
          <option value="m">Midlands</option>
          <option value="nw">North West</option>
          <option value="ne">North East</option>
          <option value="s">Scotland</option>
          <option value="w">Wales</option>
      </select>
      <button>Search</button>
    </form>
  )
}

export default RegionForm