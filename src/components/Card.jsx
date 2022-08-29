import { Flex, Img, Text } from "@chakra-ui/react";

export function Card({ restaurant: { logoUrl, name, address } }) {

    return (
        <Flex direction="column" maxW="250px" align="center" color="white" gap={2}>
            <Img
                src={logoUrl}
                h="150px"
                w="150px"
            />
            <Text fontSize="lg">{name}</Text>
            <Text textAlign="center" fontSize="sm">{address}</Text>
        </Flex>
    )
}