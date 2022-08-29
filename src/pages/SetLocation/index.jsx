import Card from './Card'
import { Container } from './styles'
import Loader from '../../components/Loader'
import { useRestaurant } from '../../context/Restaurant'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function SetLocation() {

    const { loading, restaurantProfiles } = useRestaurant()

    return (
        <>
            {
                loading && <Loader loading={loading} position="inherit" />
            }
            {
                (restaurantProfiles && !loading) &&
                <Container>
                    <h1>Onde você está?</h1>

                    <Link to="/menu/jales">
                        <Card restaurant={restaurantProfiles[0]} />
                    </Link>

                    <Link to="/menu/stafe">
                        <Card restaurant={restaurantProfiles[1]} />
                    </Link>

                </Container>
            }
        </>
    )
}