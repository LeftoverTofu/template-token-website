import { Box, Container, Divider, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { FC } from "react"

const AboutBanner: FC = () => {
    return (
            <Container
                boxShadow='2xl'
                maxW='container.xl'
                p={4}
                borderRadius={'lg'}
                border='1px'
                mb={6}
                centerContent>
            <Heading>About</Heading>
            <Divider borderColor={useColorModeValue('black','red')} my={4}/>
            <Text>
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
                [INSERT SOMETHING ABOUT THE TOKEN!]
            </Text>
        </Container>
    )
}

export default AboutBanner