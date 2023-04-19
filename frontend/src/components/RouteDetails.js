import {useRoutesContext} from '../hooks/useRoutesContext'
import { useAuthContext } from '../hooks/useAuthContext'

const RouteDetails = ({route}) => {
    const {dispatch} = useRoutesContext()
    const {user} = useAuthContext()

    const likePost = async()=>{
        if(!user){
            return
        }
        const response = await fetch('/api/routes/like/' + route._id, {
            method: 'PATCH',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'UPDATE_LIKES', payload: json})
            /*Reload is a temporary solution. Ideally, it would update without refreshing.*/
            window.location.reload(); 
        }
    }

    const unlikePost = async()=>{
        if(!user){
            return
        }

        const response = await fetch('/api/routes/like/' + route._id, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_ROUTE', payload: json})
            /*Reload is a temporary solution. Ideally, it would update without refreshing.*/
            //window.location.reload(); 
        }
    }

    const deletePost = async()=>{
        if(!user){
            return
        }

        const response = await fetch('/api/routes/' + route._id, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_ROUTE', payload: json})
            /*Reload is a temporary solution. Ideally, it would update without refreshing.*/
            //window.location.reload(); 
        }
    }

    return(
        <div id="route-details">
            <img id ="myImg" alt = "Cover" src={route.imageLink}></img>
            <h7>{route.noLikes} likes</h7>
            <h3>📍 {route.location}</h3>
            <h2>{route.title}</h2> 
            <h6>Posted by {route.madeBy}</h6>
            <p>{route.rating}</p>
            <p>{route.description}</p>
            <div class="book">
                <form>
                    <button formaction={route.bookingLink}>Book</button>
                </form>
            </div>
            {route.likedBy.includes(user.idCode)
                ? 
                    <i className="material-symbols-outlined"onClick={unlikePost}> close </i>
                : 
                    <i className="material-symbols-outlined"onClick={likePost}>favorite</i>
            }
            {route.user_id === user.idCode 
                ? 
                <span class="material-symbols-outlined" onClick={deletePost}>delete</span>
                :
                    <span></span>
            }
            
        </div>
    )
}

/* <span className="material-symbols-outlined" onClick={handleClick}>favorite</span>
*/
export default RouteDetails