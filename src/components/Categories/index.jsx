import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "../../context/Location"
import Loader from "../Loader"
import { Container } from "./styles"
import api from "../../services/api"

export default function Categories({ setCurrentCategory, currentCategory }) {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const { currentLocation } = useLocation()


    async function fetchCategories() {
        setLoading(true)

        const { data } = await api.get(`osaka-${currentLocation}-categories`)
        const dataSorted = await data.data.sort((a, b) => a.order - b.order)

        const sanitized = await dataSorted.map(data => (
            {
                id: data.id,
                order: data.attributes.order,
                title: data.attributes.title,
            }
        ))

        setCategories(sanitized)
        setCurrentCategory(sanitized[0].title)

        setLoading(false)
    }

    // fetch categories
    useEffect(() => {
        fetchCategories()
        // eslint-disable-next-line
    }, [currentLocation])

    return (
        <>
            <Container>
                {
                    loading && <Loader loading={loading} position="inherit" />
                }
                {
                    (categories && !loading) &&
                    categories.map(({ title }, index) => (
                        <h1 key={index}
                            className={currentCategory === title ? "selected" : ""}
                            onClick={() => setCurrentCategory(title)}
                        >
                            {title}
                        </h1>
                    ))
                }
            </Container>
        </>
    )
}