import { useAuthContext } from "./useAuthContext"
import { useRoutesContext } from "./useRoutesContext"

export const useLogout = () => {

    const {dispatch} = useAuthContext()
    const {dispatch:workoutsDispatch} = useAuthContext()

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user')

        //use logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_ROUTES', payload: null})
    }

    return {logout}

}