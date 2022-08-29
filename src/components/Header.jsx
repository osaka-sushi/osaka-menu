import { Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'

export function Header({ categories }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const swiperSlideHook = useSwiperSlide()

  return (
    <Flex w="100%" maxW="600px" overflowX="auto" color="white">
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
                  >{category.title}</Flex>
                )
              }
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Flex>
  )
}