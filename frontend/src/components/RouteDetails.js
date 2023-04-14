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
            dispatch({type: 'SET_ROUTE', payload: json})
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
            window.location.reload(); 
        }
    }

    return(
        <div id="route-details">
            <h2>{route.title}</h2> 
            <h3>{route.location}</h3>
            <p>{route.description}</p>
            {route.likedBy.includes(user.idCode)
                ? 
                    <i className="material-symbols-outlined"onClick={unlikePost}> close </i>
                : 
                    <i class="material-symbols-outlined"onClick={likePost}>favorite</i>
            }
            
            <h6>{route.likedBy.length} likes</h6>
        </div>
    )
}

// <span className="material-symbols-outlined" onClick={handleClick}>favorite</span>
export default RouteDetails