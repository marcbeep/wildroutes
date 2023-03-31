import { RoutesContext } from '../context/RouteContext'
import { useContext } from "react"

export const useRoutesContext = () => {
    const context = useContext(RoutesContext)

    if(!context){
        throw Error("UseRoutesContext must be used inside a RoutesContextProvider")
    }

    return context
}