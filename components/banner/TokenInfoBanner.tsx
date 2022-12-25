import { Box, Center, Container, Divider, Heading, Icon, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { FC } from "react"
import TokenCard from "../card/TokenCard"
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdInsertChart, MdDeveloperMode } from 'react-icons/md'
import { GiBurningEmbers } from 'react-icons/gi'
import { FaMoneyBillWave } from 'react-icons/fa'

const TokenInfos = [
    {title: '0% Marketing', icon: <Icon boxSize={"100px"} as={MdInsertChart} />},
    {title: '0% Development', icon: <Icon boxSize={"100px"} as={MdDeveloperMode} />},
    {title: '0% Burn', icon: <Icon boxSize={"100px"} as={GiBurningEmbers} />},
    {title: '0% Liquidity', icon: <Icon boxSize={"100px"} as={FaMoneyBillWave} />},
];

const TokenInfoBanner: FC = () => {
    return (
        <Container
            boxShadow='dark-lg'
            maxW='container.xl'
            p={4}
            borderRadius={'lg'}
            border='1px'
            
            mb={6}
            centerContent>
            <Heading>Token Info</Heading>
            <Divider borderColor={useColorModeValue('black','red')} my={4}/>
            <SimpleGrid w={"100%"} columns={[1, null, 4]} spacing='40px'>
            {TokenInfos.map((tokenInfo, index) => (
                <TokenCard key={index} title={tokenInfo.title} icon={tokenInfo.icon}/>
            ))}
            </SimpleGrid>
        </Container>
    )
}

export default TokenInfoBanner