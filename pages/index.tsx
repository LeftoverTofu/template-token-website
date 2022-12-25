import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { AspectRatio, Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import MainBanner from '../components/banner/MainBanner'
import AboutBanner from '../components/banner/AboutBanner'
import TokenInfoBanner from '../components/banner/TokenInfoBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <Box h={'100%'} bg={useColorModeValue('rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)')} px={4}>
          <MainBanner/>
          <AboutBanner/>
          <TokenInfoBanner/>
        </Box>
  )
}
