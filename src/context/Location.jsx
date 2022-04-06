import { createContext, useContext, useState } from "react";

export const LocationContext = createContext([])

export function LocationContextProvider(props){

    const [currentLocation, setCurrentLocation] = useState('')

    return(
        <LocationContext.Provider value={{currentLocation, setCurrentLocation}}>
            {props.children}
        </LocationContext.Provider>
    )
}

export function useLocation(){
    return useContext(LocationContext)
}