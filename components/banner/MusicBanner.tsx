import { Container, Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const MusicBanner: FC = () => {
    const [isMute, setMute] = useState(true);
    const [isPlaying, setPlaying] = useState(false);

    useEffect(() => {
        setPlaying(true);
        setMute(false);
    }, [])

    return (
            <Container
                boxShadow='2xl'
                maxW='container.xl'
                p={4}
                borderRadius={'lg'}
                border='1px'
                mb={6}
                centerContent>
                    <Heading>Music Player</Heading>
                    <Divider borderColor={useColorModeValue('black','red')} my={4}/>
                    <ReactPlayer
                        url="https://soundcloud.com/otodayosupa/clozee-koto-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                        playing={isPlaying}
                        muted={isMute}
                        loop={true}
                        width={'100%'}
                        height={'100px'}
                        />
            </Container>
    )
}

export default MusicBanner;