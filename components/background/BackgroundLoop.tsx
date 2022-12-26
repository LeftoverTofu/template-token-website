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
interface BackgroundLoopProps {
    children: ReactNode
}

const BackgroundLoop: FC<BackgroundLoopProps> = ({children}) => {
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion
        ? undefined
        : `${slidingAnimation} infinite 40s linear`

    return (
        <>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} boxShadow='2xl'>
                <Box 
                    backgroundImage="url('/7473280.jpg')"
                    backgroundRepeat="repeat-x"
                    w={'full'}
                    h={{base: '500px', md: '700px'}}
                    animation={animation}
                    >
                </Box>
                {children}
            </Box>
            <Flex flexDirection={'row-reverse'}>
                <Box>
                    Image by <a href="https://www.freepik.com/free-vector/hand-drawn-japanese-wave-pattern-set_28773283.htm#query=background%20repeat%20japanese&position=24&from_view=search&track=ais">Freepik</a>
                </Box>
            </Flex>
        </>
    )
}

export default BackgroundLoop;