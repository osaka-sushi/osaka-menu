import Card from './Card'
import { Container } from './styles'
import Loader from '../../components/Loader'
import { useRestaurant } from '../../context/Restaurant'
import { useEffect } from 'react'

export default function SetLocation() {

    const { loading, restaurantProfiles } = useRestaurant()

    return (
        <>
            {
                loading && <Loader loading={loading} position="inherit" />
            }
            {
                (restaurantProfiles && !loading) &&
                <Container innetHeight={window.innerHeight}>
                    <h1>Onde você está?</h1>

                    {
                        restaurantProfiles.map(restaurant => (
                            <Card
                                restaurant={restaurant}
                            />
                        ))
                    }

                </Container>
            }
        </>
    )
}