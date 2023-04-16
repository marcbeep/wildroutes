import {useState} from 'react'
import { usePost } from '../hooks/usePost'

const Create = () => {
    
    const [title, setTitle] = useState('')
    const [region, setRegion] = useState('')
    const [location, setLocation] = useState('')
    const [description,setDescription] = useState('')
    const [tag,setTag] = useState('')
    const [madeBy,setMadeBy] = useState('')
    const [bookingLink,setBookingLink] = useState('')
    const [imageLink,setImageLink] = useState('')
    const {post, error, isLoading} = usePost ()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await post(title, region, location, description, tag, madeBy, bookingLink, imageLink)
      } 
    
    return (
        <form className="create" onSubmit={handleSubmit}> 
            <h1>Create an Adventure</h1>

            <input type ="text" placeholder = "Title" onChange={(e) => setTitle(e.target.value)} value = {title}/>
            
            <select 
            id="region"
            name="region" 
            onChange={(e) => setRegion(e.target.value)} 
            value={region}
            >
              <option>Select Region</option>  
              <option value="sw">South West</option>
              <option value="se">South East</option>
              <option value="m">Midlands</option>
              <option value="nw">North West</option>
              <option value="ne">North East</option>
              <option value="s">Scotland</option>
              <option value="w">Wales</option>
          </select>

            <input type ="text" placeholder = "City" onChange={(e) => setLocation(e.target.value)} value = {location}/>

            <input type ="text" placeholder = "Description" onChange={(e) => setDescription(e.target.value)} value = {description}/> 
            
            <select 
            id="tag"
            name="tag" 
            onChange={(e) => setTag(e.target.value)} 
            value={tag}
            >
              <option>Activity Type</option>  
              <option value="Hike">Hike</option>
              <option value="Swim">Swim</option>
              <option value="Explore">Explore</option>
          </select>

            <select 
            id="madeBy"
            name="madeBy" 
            onChange={(e) => setMadeBy(e.target.value)} 
            value={madeBy}
            >
              <option>Made By</option>  
              <option value="Wildroutes Staff">Wildroutes Staff</option>
              <option value="Hydro Tour Guides">Hydro Tour Guides</option>
              <option value="Cable Experiences">Cable Experiences</option>
              <option value="National Trust Tours">National Trust Tours</option>
              <option value="Independent Tour Guide">Independent Tour Guide</option>
          </select>

            <input type ="text" placeholder = "Booking Link" onChange={(e) => setBookingLink(e.target.value)} value = {bookingLink}/>   
            {console.log(bookingLink)}

            <input type ="text" placeholder = "Image Link" onChange={(e) => setImageLink(e.target.value)} value = {imageLink}/>  
            
            <button disabled={isLoading}>Create</button>
            
            {error && <div className ="error">{error}</div>}
        
        </form>
    )
}

export default Create