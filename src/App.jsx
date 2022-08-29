import { useRestaurant } from './context/Restaurant'
import { Link } from "react-router-dom";
import { Flex, Spinner, Text } from '@chakra-ui/react';
import { Card } from './components/Card';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {

  const { loading, restaurantProfiles } = useRestaurant()
  const [windowHeight, setWindowHeight] = useState("100vh")

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  return (
    <>
      {
        loading &&
        <Flex align="center" justify="center" h={windowHeight} bg="secondary">
          <Spinner color='secondary' />
        </Flex>
      }
      {
        (restaurantProfiles && !loading) &&
        <Flex direction="column" h={windowHeight} align="center" justify="center" bg="primary" gap={5}>
          <Text fontSize="2xl" fontWeight="semibold">Onde você está?</Text>

          <Link to="/menu/jales">
            <Card restaurant={restaurantProfiles[0]} />
          </Link>

          <Link to="/menu/stafe">
            <Card restaurant={restaurantProfiles[1]} />
          </Link>

        </Flex>
      }
    </>
  )
}