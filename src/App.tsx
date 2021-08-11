import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
  ThemeConfig
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Sidebar from "./SideBar";


const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
const theme = extendTheme({ colors, config });
export const App = () => (
  <ChakraProvider theme={theme}>
    <Sidebar />
  </ChakraProvider>
)
