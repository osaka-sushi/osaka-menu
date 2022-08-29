import { useSearchParams } from "react-router-dom"

export function Menu() {

    const [searchParams] = useSearchParams()

    const location = searchParams.get('location')

    return (
        <h1>{location}</h1>
    )
}