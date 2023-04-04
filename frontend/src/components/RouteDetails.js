import {useRoutesContext} from '../hooks/useRoutesContext'
const RouteDetails = ({route}) => {

    const {dispatch} = useRoutesContext()

    const handleClick = async() => {
        const response = await fetch('/api/routes/' + route._id, {
            method: 'DELETE'
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