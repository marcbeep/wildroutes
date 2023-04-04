import {useRoutesContext} from '../hooks/useRoutesContext'
import { useAuthContext } from '../hooks/useAuthContext'

const RouteDetails = ({route}) => {

    const {dispatch} = useRoutesContext()
    const {user} = useAuthContext()

    const handleClick = async() => {

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
        }
    }

    return(
        <div className="route-details">
            <h2>{route.title}</h2>
            <h3>{route.location}</h3>
            <p>{route.description}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default RouteDetails