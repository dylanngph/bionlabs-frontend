import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import Menubar from "@/components/Menu";
import ColorModeScript from "@/components/ColorModeScript";


const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title:
    "Bionlabs - Building Web3 Solutions with Excellence - Unleashing Application Potential",
  description:
    "Building Web3 Solutions with Excellence - Unleashing Application Potential",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ColorModeScript/>
        <Providers>
          <Menubar>{children}</Menubar>
        </Providers>
      </body>
    </html>
  );
}
