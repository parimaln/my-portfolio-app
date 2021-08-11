import {
    Box,
    BoxProps,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    FlexboxProps,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaMandalorian, FaRss, FaSun } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { IconType } from "react-icons";

interface NavItemProps extends BoxProps {
    icon?: IconType;
    children: React.ReactNode;
};

interface SidebarProps extends BoxProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
}
const NavItem = (props: NavItemProps) => {
    const { icon, children, ...rest } = props;
    return (
        <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            color={useColorModeValue("inherit", "gray.400")}
            _hover={{
                bg: useColorModeValue("gray.100", "gray.900"),
                color: useColorModeValue("gray.900", "gray.200"),
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            {...rest}
        >
            
            {children}
        </Flex>
    );
};

const SidebarContent = (props: SidebarProps) => (
    <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("inherit", "gray.700")}
        borderRightWidth="1px"
        w="60"
        {...props}
    >
        <Flex px="4" py="5" align="center">
            <Text
                fontSize="2xl"
                ml="2"
                color={useColorModeValue("brand.500", "white")}
                fontWeight="semibold"
            >
                Portfolio
            </Text>
        </Flex>
        <Flex
            direction="column"
            as="nav"
            fontSize="sm"
            color="gray.600"
            aria-label="Main Navigation"
        >
            <NavItem icon={MdHome}>Personal Information</NavItem>
            <NavItem icon={HiCollection}>Key Skills</NavItem>
            <NavItem icon={FaMandalorian}>Product management projects (Udacity)</NavItem>
            <NavItem icon={HiCollection}>Software Projects</NavItem>
        </Flex>
    </Box>
);


const Sidebar = () => {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const { toggleColorMode } = useColorMode();
    return (
        <Box
            as="section"
            bg={useColorModeValue("gray.50", "gray.700")}
            minH="100vh"
        >
            <SidebarContent {...integrations} display={{ base: "none", md: "unset" }} />
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent {...integrations} w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    w="full"
                    px="4"
                    bg={useColorModeValue("white", "gray.800")}
                    borderBottomWidth="1px"
                    borderColor={useColorModeValue("inherit", "gray.700")}
                    h="14"
                >
                    <IconButton
                        aria-label="Menu"
                        display={{ base: "inline-flex", md: "none" }}
                        onClick={sidebar.onOpen}
                        icon={<FiMenu />}
                        size="sm"
                    />

                    <Flex align="center">
                        <Icon onClick={toggleColorMode} color="gray.500" as={FaSun} cursor="pointer" />
                        <Text
                            fontSize="medium"
                            ml="2"
                            color={useColorModeValue("brand.500", "white")}
                            fontWeight="semibold"
                        >
                            Parimal Naigaonkar
                        </Text>
                    </Flex>
                </Flex>

                <Box as="main" p="4">
                    {/* Add content here, remove div below  */}
                    <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar
