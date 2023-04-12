import { useAuthContext } from "./useAuthContext"
import { useRoutesContext } from "./useRoutesContext"

export const useLogout = () => {

    const {dispatch} = useAuthContext()
    const {dispatch:routesDispatch} = useRoutesContext()

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user')

        //use logout action
        dispatch({type: 'LOGOUT'})
        routesDispatch({type: 'SET_ROUTES', payload: null})
    }

    return {logout}

}