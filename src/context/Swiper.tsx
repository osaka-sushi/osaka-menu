import { createContext, useContext, useState } from "react";
import Swiper from "swiper";
import { SwiperProps } from "swiper/react";

interface SwiperContextInterface {
    swiperIcategory: Swiper;
    setSwiperIcategory: (swiperI: Swiper) => void;
    swiperIitems: Swiper
    setSwiperIitems: (swiperI: Swiper) => void;
}

export const SwiperContext = createContext({} as SwiperContextInterface)

export function SwiperContextProvider(props) {

    const [swiperIcategory, setSwiperIcategory] = useState<Swiper>()
    const [swiperIitems, setSwiperIitems] = useState<Swiper>()

    return (
        <SwiperContext.Provider
            value={{
                swiperIcategory,
                setSwiperIcategory,
                swiperIitems,
                setSwiperIitems
            }}>
            {props.children}
        </SwiperContext.Provider>
    )
}

export function useSwiperContext() {
    return useContext(SwiperContext)
}