import { Box, Flex, Heading, HStack, Image, keyframes, Stack, usePrefersReducedMotion, VStack, Text, Center, useColorModeValue } from "@chakra-ui/react";

import { FC, ReactNode, useState } from "react";

const slidingAnimation = keyframes`
0% {
    background-position: 0 0;
  }
  100% {
    background-position: 3000px 0;
  }
`

const MainBanner: FC = () => {
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion
        ? undefined
        : `${slidingAnimation} infinite 25s linear`

    return (
        <Box mb={4}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box 
                backgroundImage="url('/7473280.jpg')"
                backgroundRepeat="repeat-x"
                w={'full'}
                h={{base: '150px', md: '250px'}}
                animation={animation}
                >
            </Box>
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
        </Box>
        <Flex flexDirection={'row-reverse'}>
            <Box>
                Image by <a href="https://www.freepik.com/free-vector/hand-drawn-japanese-wave-pattern-set_28773283.htm#query=background%20repeat%20japanese&position=24&from_view=search&track=ais">Freepik</a>
            </Box>
        </Flex>
        </Box>
    )
}

export default MainBanner;