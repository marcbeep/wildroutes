import {useRoutesContext} from '../hooks/useRoutesContext'
import { useAuthContext } from '../hooks/useAuthContext'

const RouteDetails = ({route}) => {

    const {dispatch} = useRoutesContext()
    const {user} = useAuthContext()

    const handleClick = async() => {

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

    return(
        <div className="route-details">
            <h2>{route.title} {route.liked}</h2>
            <h3>{route.location}</h3>
            <p>{route.description}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>favorite</span>
        </div>
    )
}

export default RouteDetails