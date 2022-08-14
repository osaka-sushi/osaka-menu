import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "../../context/Location"
import Loader from "../Loader"
import { Container } from "./styles"

export default function Categories({setCurrentCategory, currentCategory}){

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const {currentLocation} = useLocation()

    // fetch categories
    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-${currentLocation}-categories`)
        .then(({data}) => {
            setCategories(data.data)
            setCurrentCategory(data.data[0]?.attributes?.title)
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [currentLocation])

    return(
        <>
            <Container>
            {
                loading && <Loader loading={loading} position="inherit"/>
            } 
            {
                (categories && !loading) && 
                categories.map(({attributes}, index) => (
                <h1 key={index}
                className={currentCategory === attributes.title ? "selected" : ""}
                onClick={() => setCurrentCategory(attributes.title)}
                > 
                    {attributes.title}
                </h1>
                ))
            }
            </Container>
        </>
    )
}