import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "../../context/Location"
import { Container } from "./styles"

export default function Categories({setCurrentCategory, currentCategory}){

    const [categories, setCategories] = useState([])
  const {currentLocation} = useLocation()

    // fetch categories
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-${currentLocation}-categories`)
        .then(({data}) => {
        setCategories(data.data)
        setCurrentCategory(data.data[0].attributes.title)
        })
        // eslint-disable-next-line
    }, [currentLocation])

    return(
        <Container>
        {
            categories && 
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
    )
}