import { Flex, Icon, Img, Text } from "@chakra-ui/react";

export function Profile({ currentProfile }) {

    return (
        <Flex align="center" gap={2}>
            <Img
                h="50px"
                w="50px"
                src={currentProfile?.logoUrl}
                border="1px"
                borderColor="primary"
                rounded="full"
            />
            <Flex direction="column">
                <Text>Bem Vindo</Text>
                <Text fontSize="sm" fontWeight="300">{currentProfile?.name}</Text>
            </Flex>
        </Flex>
    )
}