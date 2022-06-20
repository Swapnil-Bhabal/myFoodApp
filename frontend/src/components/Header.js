import { useState } from "react";
import { Flex, Box, Link, Heading, Button, Icon } from "@chakra-ui/react"
import { Link as RouterLink} from 'react-router-dom'
import {HiOutlineMenuAlt3, HiShoppingBag, HiUser } from 'react-icons/hi';

const MenuItems = ({ children, url }) => {
    return (
        <Link

        to={url}
        mt={{ base:4, md:0 }}
        fontSize="sm"
        letterSpacing={"wide"}
        color="blanchedalmond"
        textTransform="uppercase"
        mr="5"
        display="block"
        _hover={{ color: 'blackAlpha.900' }}
        >
            {children}
        </Link>
    )
}

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Flex
            as="header"
            bgColor="red.500"
            justify="space-between"
            wrap="wrap"
            py="6"
            px="6"
            w="100%"
            top="0"
            zIndex="2"
            pos="fixed"
            >
                <Flex>
                    <Heading as="h1" color="blanchedalmond" fontWeight="bold" size="md" letterSpacing="md">
                        <Link to="/" _hover={{ color:"blackAlpha.900" }}>
                            My Food
                        </Link>
                    </Heading>
                </Flex>
                <Box
                display={{ base:'block', md:'none', sm:'block' }} 
                onClick={() => setShow(!show)}>
                <Icon as={HiOutlineMenuAlt3} color="white" w="6" h="6"/>
                <title>Menu</title>
                </Box>
                <Box
                display={{ base: show ? 'block' : 'none', md:'flex'}}
                width={{ base:'full', md:'auto'}}
                alignItems="center"
                >
                <MenuItems url="/">
                    <Flex alignItems="center">
                    <Icon as={HiUser} w="4" h="4" mr="1"/>
                        Login
                    </Flex>
                </MenuItems>
                <MenuItems url="/">
                    <Flex alignItems="center">
                    <Icon as={HiShoppingBag} w="4" h="4" mr="1"/>
                        Orders
                    </Flex>
                </MenuItems>
                </Box>
            </Flex>
        </>
    )
}

export default Header;