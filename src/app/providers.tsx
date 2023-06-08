"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "@/configs/theme";

export function Providers({
  children,
  cookies,
}: {
  children: React.ReactNode;
  cookies?: string;
}) {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
        colorModeManager={
          typeof cookies === "string"
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager
        }
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

Providers.getInitialProps = ({ req }:{req:any}) => {
  return {
    // first time users will not have any cookies and you may not return
    // undefined here, hence ?? is necessary
    cookies: req.headers.cookie ?? '',
  }
}