import {useEffect} from 'react'
import {useRoutesContext} from '../hooks/useRoutesContext'

//components
import RouteDetails from '../components/RouteDetails'

const Home = () =>{
    const {routes, dispatch} = useRoutesContext()

    useEffect(() => {
        const fetchRoutes = async() => {

            // Fetch logic lives here

            //For production, every request points to correct endpoints
            const response = await fetch('/api/routes')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_ROUTES', payload: json})
            }
        }
        fetchRoutes()
    }, [])

    return (
        <div className="home">
            <div className ="routes">
                {routes && routes.map((route) => (
                    <RouteDetails key={route._id} route ={route} />
                ))}
            </div>
        </div>
    )
}

export default Home