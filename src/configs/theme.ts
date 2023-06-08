import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { palletes } from "./palettes";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: palletes.colors,
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1184px',
      xxl: '1366px',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: 'neutral.500',
      }
    })
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '12px',
      },
      variants: {
        primary: {
          bg: 'primary.500',
        },
        outline: {
          borderWidth: '2px'
        }
      }
    }
  }
});

export default theme;
