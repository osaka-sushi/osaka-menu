import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import { useRestaurant } from '../context/Restaurant'

export function Header({ categories }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { restaurantProfiles } = useRestaurant()
  const [currentProfile, setCurrentProfile] = useState()
  const { location } = useParams()

  function getCurrentProfile() {
    restaurantProfiles.map(profile => {
      if (profile.locationAlias == location) {
        setCurrentProfile(profile)
        return
      }
    })
  }

  useEffect(() => {
    getCurrentProfile()
  }, [restaurantProfiles])

  return (
    <>
      <Flex align="center" gap={2} w="100%" maxW="600px" color="white">
        <Box>
          <Img
            h="50px"
            w="50px"
            src={currentProfile.logoUrl}
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
      <Flex w="100%" maxW="600px" overflowX="auto" color="white" flex="1">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
        >
          <SwiperSlide />
          {
            categories &&
            categories.map(category => (
              <SwiperSlide key={category.title}>
                {
                  ({ isNext }) => (
                    <Flex
                      h="100%"
                      align="center"
                      justify="center"
                      color={isNext && 'red'}
                      cursor="pointer"
                    >{category.title}</Flex>
                  )
                }
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Flex>
    </>
  )
}