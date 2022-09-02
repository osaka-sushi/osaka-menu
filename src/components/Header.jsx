import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRestaurant } from '../context/Restaurant'
import { useSwiperContext } from '../context/Swiper'

export function Header({ categories }) {
  const { restaurantProfiles } = useRestaurant()
  const [currentProfile, setCurrentProfile] = useState()
  const { location } = useParams()
  const [swiperI, setSwiperI] = useState()
  const { setSwiperIcategory, swiperIitems, swiperIcategory } = useSwiperContext()

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
  }, [restaurantProfiles, swiperIcategory, swiperIitems])

  return (
    <>
      <Flex align="center" gap={2} w="100%" maxW="600px" color="white" py={5}>
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
      <Flex w="100%" maxW="600px" overflowX="auto" color="white" flex="1">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          onInit={swiper => setSwiperIcategory(swiper)}
        >
          <SwiperSlide />
          {
            categories &&
            categories.map((category, index) => (
              <SwiperSlide key={category.title}>
                {
                  ({ isNext }) => (
                    <Flex
                      h="100%"
                      align="center"
                      justify="center"
                      color={isNext && 'primary'}
                      cursor="pointer"
                      onClick={() => handleSlide(index)}
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