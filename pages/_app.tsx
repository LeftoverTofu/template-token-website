import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/navbar/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </ChakraProvider>
  )
}
