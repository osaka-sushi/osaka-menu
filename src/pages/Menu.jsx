import { Flex } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Items } from "../components/Items"
import { useRestaurant } from "../context/Restaurant"

export function Menu() {

    const { location } = useParams()
    const [restaurantData, setRestaurantData] = useState()
    const [windowHeight, setWindowHeight] = useState()
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(1)

    const { fetchRestaurantMenu, loading, restaurantProfiles } = useRestaurant()

    async function fetchRestaurantData() {
        const data = await fetchRestaurantMenu(location)
        setRestaurantData(data)
    }

    useEffect(() => {
        fetchRestaurantData()
        setWindowHeight(window.innerHeight)
    }, [location])

    useEffect(() => {
    }, [])

    return (
        <Flex direction="column" bg='secondary' h={windowHeight} align="center">
            {
                restaurantData &&
                <>
                    <Header categories={restaurantData.categories} />
                    <Items items={restaurantData.items} categories={restaurantData.categories} />
                </>
            }
        </Flex>
    )
}