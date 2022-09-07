import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperContext } from '../context/Swiper'

interface CategoriesProps {
    id: number;
    order: number;
    title: string;
}

interface CategoriesCarouselProps {
    categories: CategoriesProps[];
}

export function CategoriesCarousel({ categories }: CategoriesCarouselProps) {

    const { setSwiperIcategory, swiperIitems, swiperIcategory } = useSwiperContext()

    function handleSlide(categoryIndex: number) {
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
                            ({ isNext }) => (
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
                                        index === swiperIcategory?.activeIndex - 1 && "sm" ||
                                        index === swiperIcategory?.activeIndex + 1 && "sm" ||
                                        index === swiperIcategory?.activeIndex && "lg"
                                    }
                                >
                                    {category.title}
                                </Flex>
                            )
                        }
                    </SwiperSlide>
                ))
            }
            <SwiperSlide />
        </Swiper>
    )
}