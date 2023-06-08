import React from 'react'
import Image from 'next/image'
import { Box, useColorMode } from '@chakra-ui/react'

const Logo = () => {
  const {colorMode} = useColorMode();
  return (
    <Box>
        <Image
            src={colorMode === 'dark' ? "/logo_light.svg" : 'logo.svg'}
            alt='Bionlabs Logo'
            width={150}
            height={31.28}
        />
    </Box>
  )
}

export default Logo