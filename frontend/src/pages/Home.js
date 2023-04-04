import {useEffect} from "react"
import {useRoutesContext} from "../hooks/useRoutesContext"
import {useAuthContext} from '../hooks/useAuthContext'

//components
import RouteDetails from '../components/RouteDetails'

const Home = () =>{
    const {routes, dispatch} = useRoutesContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchRoutes = async() => {

            // Fetch logic lives here

            //For production, every request points to correct endpoints
            const response = await fetch('/api/routes', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_ROUTES', payload: json})
            }
        }
        if(user){
            fetchRoutes()
        } 
    }, [dispatch, user])

    return (
        <div className="home">
            <div className ="routes">
                {routes && routes.map(route => (
                    <RouteDetails key={route._id} route ={route} />
                ))}
            </div>
        </div>
    )
}

export default Home