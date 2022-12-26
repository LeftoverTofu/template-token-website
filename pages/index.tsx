import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player'
import MainBanner from '../components/banner/MainBanner'
import AboutBanner from '../components/banner/AboutBanner'
import TokenInfoBanner from '../components/banner/TokenInfoBanner'
import MusicBanner from '../components/banner/MusicBanner'
import { useRouter } from 'next/router'
import BackgroundLoop from '../components/background/BackgroundLoop'
import { Box, Button, Center, Heading, useColorModeValue } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Welcome() {
  const router = useRouter();

  const enterButtonHandler = () => {
    router.push('/home')
  }

  return (
          <Box h="80vh" mb={4}>
            <BackgroundLoop>
                <Center
                    mt={2}
                    ml={2}
                    position="absolute"
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    zIndex={0}
                    >
                    <Heading size={{base: 'md', md: 'xl'}} bg={useColorModeValue('rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)')}>Welcome to [INSERT TITLE]</Heading>
                    <Button onClick={() => {enterButtonHandler()}} mt={4} size={'lg'} variant='solid' colorScheme='yellow'>Enter</Button>
                </Center>
          </BackgroundLoop>
        </Box>
  )
}
