import { Box, Flex, Icon, Img, Text, useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRestaurant } from '../context/Restaurant'
import { CategoriesGradient } from './CategoriesGradient'
import { CategoriesCarousel } from './CategoriesCarousel'
import { RestaurantInfo } from './RestaurantInfo'
import { Profile } from './Profile'
import { FiMenu } from 'react-icons/fi'

export function Header({ categories }) {
  const { restaurantProfiles } = useRestaurant()
  const [currentProfile, setCurrentProfile] = useState()
  const { location } = useParams()
  const { isOpen: isInfoOpen, onOpen, onClose } = useDisclosure()

  function getCurrentProfile() {
    restaurantProfiles.map(profile => {
      if (profile.locationAlias == location) {
        setCurrentProfile(profile)
        return
      }
    })
  }

  function toggleInfo() {
    !isInfoOpen && onOpen()
    isInfoOpen && onClose()
  }

  useEffect(() => {
    getCurrentProfile()
  }, [restaurantProfiles])

  return (
    <>
      <Flex align="center" w="100%" maxW="600px" color="white" p={5} justify="space-between">

        <Profile currentProfile={currentProfile} />

        <Icon as={FiMenu} color="primary" onClick={toggleInfo} fontSize="2xl" cursor="pointer" />
      </Flex>

      {
        !isInfoOpen &&
        <Flex w="100%" maxW="600px" overflowX="auto" color="white" flex="1" position="relative">

          <CategoriesGradient />

          <CategoriesCarousel categories={categories} />
        </Flex>
      }

      {
        isInfoOpen &&
        <RestaurantInfo
          currentProfile={currentProfile}
        />
      }

    </>
  )
}