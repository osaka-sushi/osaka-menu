import {
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    Flex,
    Divider,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown';

interface CurrentProfileProps {
    address: string;
    hours: string;
    location: string;
    locationAlias: string;
    logoUrl: string;
    name: string;
    phone: string;
    phone2: string;
}

interface RestaurantInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentProfile: CurrentProfileProps;
}

export function RestaurantInfo({ currentProfile, isOpen, onClose }: RestaurantInfoModalProps) {

    return (
        <Flex p={5} h="100vh" align="center" direction="column" color="white" gap={5} mt={20}>
            <Text fontSize="xl" color="primary">Horários</Text>
            <ReactMarkdown>{currentProfile?.hours}</ReactMarkdown>
            <Divider />
            <Text fontSize="xl" color="primary">Telefone</Text>
            <ReactMarkdown>{currentProfile.phone}</ReactMarkdown>
            <Divider />
            <Text fontSize="xl" color="primary">Endereço</Text>
            <Text textAlign="center">{currentProfile.address}</Text>
        </Flex>
    )
}