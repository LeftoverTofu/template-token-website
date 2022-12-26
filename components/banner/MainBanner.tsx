import { Box, Center, Heading, useColorModeValue, Text } from "@chakra-ui/react";
import { FC } from "react";
import BackgroundLoop from "../background/BackgroundLoop";

const MainBanner: FC = () => {
    return (
        <Box mb={4}>
            <BackgroundLoop>
                <Center
                    mt={2}
                    ml={2}
                    position="absolute"
                    bg={useColorModeValue('rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)')}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    zIndex={0}
                    >
                    <Heading>[INSERT TITLE HERE!]</Heading>
                    <Text>[INSERT SUB TEXT]</Text>
                </Center>
            </BackgroundLoop>
        </Box>
    )
}

export default MainBanner;