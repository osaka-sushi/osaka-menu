import { createContext, useContext, useState } from "react";

export const SwiperContext = createContext([])

export function SwiperContextProvider(props) {

    const [swiperIcategory, setSwiperIcategory] = useState()
    const [swiperIitems, setSwiperIitems] = useState()

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