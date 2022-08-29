import { useSearchParams } from "react-router-dom"

export function RestaurantMenu() {

    const [searchParams] = useSearchParams()

    const name = searchParams.get('name')

    return (
        <h1>{name}</h1>
    )
}