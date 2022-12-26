import { Box } from "@chakra-ui/react";
import AboutBanner from "../components/banner/AboutBanner";
import MainBanner from "../components/banner/MainBanner";
import MusicBanner from "../components/banner/MusicBanner";
import TokenInfoBanner from "../components/banner/TokenInfoBanner";

export default function Home() {
  return (
        <Box h={'100%'} px={4}>
          <MainBanner/>
          <MusicBanner/>
          <AboutBanner/>
          <TokenInfoBanner/>
        </Box>
  )
}