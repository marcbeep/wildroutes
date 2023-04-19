import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const usePost = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const {user} = useAuthContext()


    const post = async (title, region, location, rating, description, tag, bookingLink, imageLink) => {
        if(!user){
            return
        }
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/routes', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'},
            body: JSON.stringify({title, region, rating, location, description, tag, bookingLink, imageLink})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            dispatch({type: 'CREATE_ROUTE', payload: json})
            /*Reload is a temporary solution. Ideally, it would update without refreshing.*/
            window.location.reload(); 
        }

    }
    return {post, isLoading, error}
}