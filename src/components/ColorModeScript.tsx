'use client';

import React from 'react'
import { ColorModeScript as CharkraColorModeScript, theme } from '@chakra-ui/react'

const ColorModeScript = () => {
  return (
    <CharkraColorModeScript initialColorMode={theme.config.initialColorMode} />
  )
}

export default ColorModeScript