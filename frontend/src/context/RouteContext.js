import {createContext, useReducer} from 'react'

export const RoutesContext = createContext() // Creates brand new context

export const routesReducer = (state, action) => {
    switch (action.type){
        case 'SET_ROUTES': 
            return {
                routes: action.payload
            }
        case 'CREATE_ROUTE':
            return {
                routes: [action.payload, ...state.routes]
            }
        default:
            return state
    }
}

export const RoutesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(routesReducer, {
        routes: null
    })

    // Wrap entire app
    return(
        <RoutesContext.Provider value={{...state, dispatch}}>
            {children}
        </RoutesContext.Provider>
    )

}
