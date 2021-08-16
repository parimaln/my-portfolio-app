import {
    Box,
    BoxProps,
    chakra,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Link,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { FaMandalorian, FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import React from "react";
import { IconType } from "react-icons";
import Intro from "../Intro/Intro";
import { useQuery } from "urql";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import UserCard from "components/UserCard/UserCard.lazy";
import ProjectListWrapper from "components/ProjectListWrapper/ProjectListWrapper";
import UdacityProjectWrapper from "components/UdacityProjectWrapper/UdacityProjectWrapper";

enum SIDEBAR_ITEMS {
    Home = 1,
    AboutMe,
    Resume,
    OfficialProjects,
    PM,
    PersonalProjects
}

interface NavItemProps extends BoxProps {
    icon?: IconType;
    children: React.ReactNode;
    selected?: boolean
};

interface SidebarProps extends BoxProps {
    setSelectedNav: React.Dispatch<React.SetStateAction<number>>;
    SelectedNav: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
    file: string;
}
const NavItem = (props: NavItemProps) => {
    const { icon, children, ...rest } = props;
    const colorSelected = useColorModeValue("gray.100", "gray.900");
    const colorNormal = useColorModeValue("white", "gray.800");
    return (
        <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            bg={props.selected ? colorSelected : colorNormal}
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
        <Flex
            direction="column"
            as="nav"
            fontSize="sm"
            color="gray.600"
            aria-label="Main Navigation"
        >
            <NavItem selected={isSelected(SIDEBAR_ITEMS.Home, props.SelectedNav)} onClick={() => props.setSelectedNav(SIDEBAR_ITEMS.Home)} icon={MdHome}>Home</NavItem>
            <NavItem selected={isSelected(SIDEBAR_ITEMS.AboutMe, props.SelectedNav)} onClick={() => props.setSelectedNav(SIDEBAR_ITEMS.AboutMe)} icon={HiCollection}>About Me</NavItem>
            <NavItem icon={HiCollection}>
            <Link href={props.file} isExternal>
            Résumé <ExternalLinkIcon mx="2px" />
            </Link>
            </NavItem>
            <NavItem selected={isSelected(SIDEBAR_ITEMS.OfficialProjects, props.SelectedNav)} onClick={() => props.setSelectedNav(SIDEBAR_ITEMS.OfficialProjects)} icon={HiCollection}>Official Projects</NavItem>
            <NavItem selected={isSelected(SIDEBAR_ITEMS.PM, props.SelectedNav)} onClick={() => props.setSelectedNav(SIDEBAR_ITEMS.PM)} icon={FaMandalorian}>Udacity Projects</NavItem>
            <NavItem selected={isSelected(SIDEBAR_ITEMS.PersonalProjects, props.SelectedNav)} onClick={() => props.setSelectedNav(SIDEBAR_ITEMS.PersonalProjects)} icon={HiCollection}>Software Projects</NavItem>
        </Flex>
    </Box>
);


const Sidebar = () => {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [SelectedNav, setSelectedNav] = React.useState(1)
    const [file, setFile] = React.useState('');
    const PdfQuery = `
    query {
        asset(where: {id: "cksd16wa0lb2y0b57q8q3qdxe"}) {
        url
        }
    }
    `;
    const [result] = useQuery({
    query: PdfQuery,
    });

    const { data, fetching } = result;

    React.useEffect(() => {
        if (!fetching && data && data.asset && data.asset.url) {
            setFile(data.asset.url)
        }
    }, [data, fetching])
    return (
        <Box
            as="section"
            bg={useColorModeValue("gray.50", "gray.700")}
            minH="100vh"
        >
            <SidebarContent file={file} SelectedNav={SelectedNav} setSelectedNav={setSelectedNav} {...integrations} display={{ base: "none", md: "unset" }} />
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent file={file} SelectedNav={SelectedNav} setSelectedNav={setSelectedNav} {...integrations} w="full" borderRight="none" />
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
                        {colorMode === 'dark' && <Icon onClick={toggleColorMode} color="gray.500" as={FaSun} cursor="pointer" />}
                        {colorMode === 'light' && <Icon onClick={toggleColorMode} color="gray.500" as={FaMoon} cursor="pointer" />}
                        <Text
                            fontSize="medium"
                            ml="2"
                            color={useColorModeValue("brand.500", "white")}
                            fontWeight="semibold"
                        >
                            My Portfolio
                        </Text>
                    </Flex>
                </Flex>

                <Box as="main">
                    {SelectedNav === SIDEBAR_ITEMS.Home &&
                        <UserCard />
                    }
                    {SelectedNav === SIDEBAR_ITEMS.AboutMe &&
                        <Intro />
                    }
                    {SelectedNav === SIDEBAR_ITEMS.OfficialProjects &&
                        <ProjectListWrapper />
                    }
                    {SelectedNav === SIDEBAR_ITEMS.PM &&
                        <UdacityProjectWrapper />
                    }
                    {SelectedNav === SIDEBAR_ITEMS.PersonalProjects &&
                        <chakra.h1>WIP</chakra.h1>
                    }
                    {/* <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" /> */}
                </Box>
            </Box>
        </Box>
    );
}

function isSelected(currentIndex: number, selectedIndex: number): boolean {
    return currentIndex === selectedIndex;
}

export default Sidebar
