import {useState} from 'react'
import { usePost } from '../hooks/usePost'

const Create = () => {
    
    const [title, setTitle] = useState('')
    const [region, setRegion] = useState('')
    const [location, setLocation] = useState('')
    const [description,setDescription] = useState('')
    const [tag,setTag] = useState('')
    const [bookingLink,setBookingLink] = useState('')
    const [imageLink,setImageLink] = useState('')
    const [rating,setRating] = useState('')

    const {post, error, isLoading} = usePost ()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await post(title, region, location, rating, description, tag, bookingLink, imageLink)
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
              <option>Select region</option>  
              <option value="sw">South West</option>
              <option value="se">South East</option>
              <option value="m">Midlands</option>
              <option value="nw">North West</option>
              <option value="ne">North East</option>
              <option value="s">Scotland</option>
              <option value="w">Wales</option>
          </select>

            <input type ="text" placeholder = "City" onChange={(e) => setLocation(e.target.value)} value = {location}/>
            
            <select 
            id="rating"
            name="rating" 
            onChange={(e) => setRating(e.target.value)} 
            value={rating}
            >
              <option>Select rating</option>  
              <option value="⭐️">⭐️</option>
              <option value="⭐️⭐️">⭐️⭐️</option>
              <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
              <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
              <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
          </select>

            <input type ="text" placeholder = "Description" onChange={(e) => setDescription(e.target.value)} value = {description}/> 
            
            <select 
            id="tag"
            name="tag" 
            onChange={(e) => setTag(e.target.value)} 
            value={tag}
            >
              <option>Select activity type</option>  
              <option value="Hike">Hiking / Trekking</option>
              <option value="Camp">Camping / Nature</option>
              <option value="Hunt">Hunting / Fishing</option>
              <option value="Water">Swimming / Watersports</option>
              <option value="Land">Biking / Landsports</option>
              <option value="Explore">Exploring</option>
              <option value="Other">Other</option>
          </select>

          <input type ="text" placeholder = "Booking Link" onChange={(e) => setBookingLink(e.target.value)} value = {bookingLink}/>   

          <input type ="text" placeholder = "Image Link" onChange={(e) => setImageLink(e.target.value)} value = {imageLink}/>  
            
          <button disabled={isLoading}>Create</button>
            
          {error && <div className ="error">{error}</div>}
        
        </form>
    )
}

export default Create