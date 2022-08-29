import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import api from "../services/api";

export const RestaurantContext = createContext([])

export function RestaurantContextProvider(props) {

    const [restaurantMenuData, setRestaurantMenuData] = useState()
    const [restaurantProfiles, setRestaurantProfiles] = useState()
    const [loading, setLoading] = useState()

    async function fetchRestaurantMenu(name) {

    }

    async function fetchRestaurantsProfile() {
        setLoading(true)
        const { data: restaurant1 } = await api.get('/osaka-jales-infos')
        const { data: restaurant2 } = await api.get('/osaka-stafe-infos')

        const sanitizeRestaurant1 = {
            name: restaurant1.data[0].attributes.name,
            phone: restaurant1.data[0].attributes.phone,
            phone2: restaurant1.data[0].attributes.phone2,
            location: restaurant1.data[0].attributes.location,
            logoUrl: restaurant1.data[0].attributes.logo_url,
            hours: restaurant1.data[0].attributes.hours,
            address: restaurant1.data[0].attributes.address,
        }

        const sanitizeRestaurant2 = {
            name: restaurant2.data[0].attributes.name,
            phone: restaurant2.data[0].attributes.phone,
            phone2: restaurant2.data[0].attributes.phone2,
            location: restaurant2.data[0].attributes.location,
            logoUrl: restaurant2.data[0].attributes.logo_url,
            hours: restaurant2.data[0].attributes.hours,
            address: restaurant2.data[0].attributes.address,
        }

        setRestaurantProfiles([sanitizeRestaurant1, sanitizeRestaurant2])

        setLoading(false)
    }

    useEffect(() => {
        fetchRestaurantsProfile()
    }, [])

    return (
        <RestaurantContext.Provider value={{
            restaurantProfiles,
            fetchRestaurantMenu,
            loading
        }}>
            {props.children}
        </RestaurantContext.Provider>
    )
}

export function useRestaurant() {
    return useContext(RestaurantContext)
}