import {
  ChakraProvider,
  extendTheme,
  ThemeConfig
} from "@chakra-ui/react"
import Sidebar from "./components/sidebar/SideBar";
import { createClient, Provider } from "urql";
import * as React from "react"

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
  initialColorMode: "dark",
  useSystemColorMode: false,
}
const client = createClient({
  url: process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : '',
  fetchOptions: () => {
    const token = process.env.REACT_APP_TOKEN
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});

const theme = extendTheme({ colors, config });
export const App = () => (
  <Provider value={client}>
    <ChakraProvider theme={theme}>
      <Sidebar />
    </ChakraProvider>
  </Provider>
)
