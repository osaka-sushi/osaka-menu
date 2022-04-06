import axios from 'axios'
import { useEffect, useState } from 'react'
import {Container} from './styles'

export default function Location(){
    
    const [companyInfo, setCompanyInfo] = useState([])

    // fetch company info
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-jales-infos`)
        .then(({data}) => (
        setCompanyInfo(data.data[0].attributes)
        ))
    }, [])

    return(
        <Container>
            {
                companyInfo &&
                <>
                    <h1>Onde você está?</h1>
                    <div className="location">
                        <img src={companyInfo.logo_url} alt="logo" />
                        <h2>
                            Osaka Sushi Lounge
                            <span> Jales</span>
                        </h2>
                        <p>Av. João Amadeu, 2464, Centro</p>
                    </div>

                    <span/>

                    <div className="location">
                        <img src={companyInfo.logo_url} alt="logo" />
                        <h2>
                            Osaka Sushi Delivery
                            <span> Santa Fé</span>
                        </h2>
                        <p>Av. Navarro de Andrade, 760, Centro</p>
                    </div>
                </>
            }
        </Container>
    )
}