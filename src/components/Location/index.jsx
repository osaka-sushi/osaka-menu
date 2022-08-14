import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from '../../context/Location'
import Card from './Card'
import {Container} from './styles'
import Loader from '../Loader'

export default function Location(){
    
    const {currentLocation} = useLocation()

    const [companyInfo, setCompanyInfo] = useState([])

    const [loading, setLoading] = useState(false)

    // fetch company info
    useEffect(() => {

        setLoading(true)

        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-jales-infos`)
        .then(({data}) => {
            setCompanyInfo(data.data[0]?.attributes)
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [])

    return(
        <>
            {
                loading && <Loader loading={loading} position="inherit"/>
            }
            {
                (companyInfo && !currentLocation && !loading) &&
                <Container innetHeight={window.innerHeight}>
                    <h1>Onde você está?</h1>

                    <Card 
                    companyInfo={companyInfo}
                    title="Osaka Sushi Lounge"
                    city=" Jales"
                    address="Av. João Amadeu, 2464, Centro"
                    locationAlias="jales"
                    />

                    <span/>

                    <Card
                        companyInfo={companyInfo}
                        title="Osaka Sushi Delivery"
                        city=" Santa Fé"
                        address="Av. Navarro de Andrade, 760, Centro"
                        locationAlias="stafe"
                    />
        
                </Container>
            }
        </>
    )
}