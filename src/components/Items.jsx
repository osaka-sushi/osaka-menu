import { Box, Flex, Image, Img, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperContext } from "../context/Swiper";
import { maskPrice } from "../util/maskPrice";

export function Items({ items, categories }) {

    const { setSwiperIitems, swiperIcategory, swiperIitems } = useSwiperContext()

    function handleSlide(itemsIndex) {
        swiperIcategory.slideTo(itemsIndex)
        swiperIitems.slideTo(itemsIndex)
    }

    return (
        <Flex h="0px" flex="8" w="100vw" maxW="600px" color="white">
            <Swiper
                onInit={swiper => setSwiperIitems(swiper)}
                slidesPerView={1}
                onSlideChange={swiper => handleSlide(swiper?.activeIndex ?? 0)}
            >
                {
                    categories.map(category => (
                        <SwiperSlide
                            key={category.title}
                            style={{
                                overflowY: "auto",
                                gap: "100px"
                            }}
                        >
                            {
                                items.map(item => {
                                    if (item.category == category.title) {
                                        return (
                                            <Flex minH="100px" align="center" key={item.title} p={5} my={5} gap={5}>

                                                <Box>
                                                    <Image
                                                        h="80px"
                                                        w="80px"
                                                        bgImage={item.imgUrl}
                                                        bgSize="cover"
                                                        rounded="full"
                                                        flex="1"
                                                        border="1px"
                                                        borderColor="primary"
                                                    />
                                                </Box>

                                                <Flex direction="column" flex="6" gap={2}>
                                                    <Text fontSize="lg" color="primary">{item.title}</Text>
                                                    <Text fontWeight="300" fontSize="sm">{item.description}</Text>
                                                    <Text color="primary">{maskPrice(item.price + '')}</Text>
                                                </Flex>
                                            </Flex>
                                        )
                                    }
                                })
                            }
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Flex >
    )
}