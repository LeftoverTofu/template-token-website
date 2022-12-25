import { Avatar, Box, Button, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorMode, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLink from "./NavLink";

interface NavBarProps {
    children: ReactNode
}

const Links = ['Home', 'Telegram', 'Token', 'Chart', 'Whitepaper'];

const NavBar: FC<NavBarProps> = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const color = useColorModeValue('rgb(255,255,255)', 'rgb(0,0,0)');
    
    return (
        <VStack align={"flex-start"} h="100%" bg={useColorModeValue('rgba(255,255,255, 0.4)', 'rgba(0,0,0, 0.4)')}>
             <Box w="100vw" h={16} bg={color} px={4}>
                <Flex boxShadow='2xl' h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Button display={{ md: 'none' }} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Box>[INSERT LOGO HERE!]</Box>
                </HStack>
                <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}>
                    <>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                        ))}
                    </>
                </HStack>
                </Flex>
                {isOpen ? (
                <Box pb={4} display={{ md: 'none' }} position={'relative'} bg={color} zIndex={1}>
                    <Stack as={'nav'} spacing={4} position={'relative'}>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                    </Stack>
                </Box>
                ) : null}
            </Box>
            <Box w={"full"} flexGrow={1}>
            {children}
            </Box>
        </VStack>
    )
}

export default NavBar;