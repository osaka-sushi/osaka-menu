import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperContext } from '../context/Swiper'

export function CategoriesCarousel({ categories }) {

    const { setSwiperIcategory, swiperIitems, swiperIcategory } = useSwiperContext()

    function handleSlide(categoryIndex) {
        swiperIcategory.slideTo(categoryIndex)
        swiperIitems.slideTo(categoryIndex)
    }

    return (
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
                            ({ isNext, isActive, isPrev }) => (
                                <Flex
                                    h="100%"
                                    align="center"
                                    justify="center"
                                    color={isNext && 'primary'}
                                    cursor="pointer"
                                    onClick={() => handleSlide(index)}
                                    px={5}
                                    textAlign="center"
                                    fontSize={
                                        index == swiperIcategory?.activeIndex - 1 && "sm" ||
                                        index == swiperIcategory?.activeIndex + 1 && "sm" ||
                                        index == swiperIcategory?.activeIndex && "lg"
                                    }
                                >{category.title}</Flex>
                            )
                        }
                    </SwiperSlide>
                ))
            }
            <SwiperSlide />
        </Swiper>
    )
}