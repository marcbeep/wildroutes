import { useState } from 'react'
import { usePost } from '../hooks/usePost'
import {useAuthContext} from '../hooks/useAuthContext'

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [region, setRegion] = useState('')
  const [description,setDescription] = useState('')
  const [tag,setTag] = useState('')
  //const [madeBy,setMadeBy] = useState('')
  const {post, error, isLoading} = usePost ()
  const test = "hello"
  const {user} = useAuthContext()
  const madeBy = user.idCode
  

  const handleSubmit = async(e) => {
    e.preventDefault()
    await post(title, region, location, description, tag, madeBy)
  } 

  return (
    <form className="post-form" onSubmit={handleSubmit}> 
      <h3>Post An Adventure</h3>

      <label>Name of Adventure:</label>
      <input type ="text" onChange={(e) => setTitle(e.target.value)} value = {title}/>

      <label>Location:</label>
      <input type ="text" onChange={(e) => setLocation(e.target.value)} value = {location}/>

      <label>Region:</label>
      <select 
        id="region"
        name="region" 
        onChange={(e) => setRegion(e.target.value)} 
        value={region}
        >
          <option></option>  
          <option value="sw">South West</option>
          <option value="se">Midlands</option>
          <option value="m">Midlands</option>
          <option value="nw">North West</option>
          <option value="ne">North East</option>
          <option value="s">Scotland</option>
          <option value="w">Wales</option>
      </select>

      <label>tag:</label>
      <input type ="text" onChange={(e) => setTag(e.target.value)} value = {tag}/>


      <label>Description:</label>
      <input type ="text" onChange={(e) => setDescription(e.target.value)} value = {description}/>

      <label></label>

      <button disabled={isLoading}>GO!</button>
      {error && <div className ="error">{error}</div>}
    </form>
  )
}

export default PostForm