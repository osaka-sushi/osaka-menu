import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRestaurant } from '../context/Restaurant'
import { useSwiperContext } from '../context/Swiper'
import { CategoriesGradient } from './CategoriesGradient'
import { CategoriesCarousel } from './CategoriesCarousel'

export function Header({ categories }) {
  const { restaurantProfiles } = useRestaurant()
  const [currentProfile, setCurrentProfile] = useState()
  const { location } = useParams()
  const [swiperI, setSwiperI] = useState()
  const { swiperIitems, swiperIcategory } = useSwiperContext()

  function getCurrentProfile() {
    restaurantProfiles.map(profile => {
      if (profile.locationAlias == location) {
        setCurrentProfile(profile)
        return
      }
    })
  }

  function handleSlide(categoryIndex) {
    swiperIcategory.slideTo(categoryIndex)
    swiperIitems.slideTo(categoryIndex)
  }

  useEffect(() => {
    getCurrentProfile()
  }, [restaurantProfiles])

  return (
    <>
      <Flex align="center" gap={2} w="100%" maxW="600px" color="white" p={5}>
        <Box>
          <Img
            h="50px"
            w="50px"
            src={currentProfile?.logoUrl}
            border="1px"
            borderColor="primary"
            rounded="full"
          />
        </Box>
        <Flex direction="column">
          <Text>Bem Vindo</Text>
          <Text fontSize="sm" fontWeight="300">{currentProfile?.name}</Text>
        </Flex>
      </Flex>
      <Flex w="100%" maxW="600px" overflowX="auto" color="white" flex="1" position="relative">

        <CategoriesGradient />

        <CategoriesCarousel categories={categories} />
      </Flex>
    </>
  )
}