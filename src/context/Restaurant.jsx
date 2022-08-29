import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import api from "../services/api";

export const RestaurantContext = createContext([])

export function RestaurantContextProvider(props) {

    const [restaurantMenuData, setRestaurantMenuData] = useState()
    const [restaurantProfiles, setRestaurantProfiles] = useState()
    const [loading, setLoading] = useState()

    function profileSanitizer(array) {
        return (
            {
                name: array.data[0].attributes.name,
                phone: array.data[0].attributes.phone,
                phone2: array.data[0].attributes.phone2,
                location: array.data[0].attributes.location,
                logoUrl: array.data[0].attributes.logo_url,
                hours: array.data[0].attributes.hours,
                address: array.data[0].attributes.address,
            }
        )
    }

    function restaurantCategorySanitizer(array) {
        const allCategories = []

        array?.data?.data?.map(data => {
            allCategories.push({
                id: data.id,
                title: data?.attributes.title,
                order: data?.attributes.order,
            })
        })

        return (allCategories)
    }

    function restaurantItemsSanitizer(array, restaurantName) {

        const allItems = []

        array.data.data.map(item => {
            allItems.push({
                id: item?.id,
                title: item?.attributes?.title,
                description: item?.attributes?.description,
                imgUrl: item?.attributes?.img_url,
                order: item?.attributes?.order,
                price: item?.attributes?.price,
                category: item?.attributes[`${restaurantName}_category`]?.data?.attributes?.title,
                title: item?.attributes?.title,
            })
        })

        return allItems
    }

    async function fetchRestaurantMenu(location) {
        setLoading(true)

        const categories = await api.get(`/osaka-${location}-categories`)
        const itemsPg1 = await api.get(`/osaka-${location}-items?pagination[pageSize]=100&pagination[page]=1&populate=*`)
        const itemsPg2 = await api.get(`/osaka-${location}-items?pagination[pageSize]=100&pagination[page]=2&populate=*`)

        setLoading(false)

        return ({
            categories: restaurantCategorySanitizer(categories),
            items: [...restaurantItemsSanitizer(itemsPg1, `osaka_${location}`), ...restaurantItemsSanitizer(itemsPg2, `osaka_${location}`)]
        })

    }

    async function fetchRestaurantsProfile() {
        setLoading(true)
        const { data: restaurant1 } = await api.get('/osaka-jales-infos')
        const { data: restaurant2 } = await api.get('/osaka-stafe-infos')

        const sanitizeRestaurant1 = profileSanitizer(restaurant1)
        const sanitizeRestaurant2 = profileSanitizer(restaurant2)

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