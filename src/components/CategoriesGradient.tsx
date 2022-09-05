import { Box } from '@chakra-ui/react'

export function CategoriesGradient() {
    return (
        <Box
            position="absolute"
            w="100%"
            h="100%"
            left="0"
            top="0"
            bgGradient="linear-gradient(to-l, secondary, transparent, secondary);"
            zIndex="10"
            pointerEvents="none"
        />
    )
}