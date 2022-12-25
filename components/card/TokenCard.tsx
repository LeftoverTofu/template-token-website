import { Center, VStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

interface TokenCardProps {
    title: string,
    icon: JSX.Element
}

const TokenCard: FC<TokenCardProps> = ({title, icon}) => {
    return (
        <Center
            borderRadius={'lg'}
            border='1px'
            borderColor={useColorModeValue('red','black')}
            bg='blue.500'
            height='240px'>
                <VStack>
                    <Text>{title}</Text>
                    {icon}
                </VStack>
        </Center>
    )
}

export default TokenCard;