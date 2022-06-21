import { Box, Flex, Link, Image, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Rating from "./Rating";


const Dish = ({ dish }) => {
    const { name, chef, image, description } = dish;
    return (
        <>
            <Link>
            <Box 
            maxW="sm"
            borderRadius="lg"
            border="1px"
            borderColor="gray.300"
            overflow="hidden"
            transition="all"
            _hover={{ shadow: 'lg' }}
            >
            <Image src={image} alt={name} minH="sm"/>
            <Flex py="5" px="4">
               <Heading as="h4" fontSize="xl">{name}</Heading>
            </Flex>
            <Flex alignItems="flex-start">
                <Rating/>
            </Flex>
            <Flex flexDirection="column" gap="2" px="4" py="5">
                <Text>{description}</Text>
                <Text>By <strong>{chef}</strong></Text>
            </Flex>
            </Box>
            </Link>
            
        </>
    )
}

export default Dish;