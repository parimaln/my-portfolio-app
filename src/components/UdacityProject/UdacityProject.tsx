import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export interface UdacityProjectInfo {
  id: string;
  projectType: string;
  curriculum: string;
  learning: string;
  projectTitle: string
  projectUrl: string
}
export default function UdacityProject(props: UdacityProjectInfo) {
  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {props.projectType === 'PM' ? 'Product Management' : 'Cloud Developer'}
          </chakra.span>
        </Flex>

        <Box mt={2}>
          <chakra.h2
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
          >
            {props.curriculum}
          </chakra.h2>
          <chakra.h2
            fontSize="xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
          >
            {props.learning}
          </chakra.h2>

          <Link 
          fontSize="xl"
          fontWeight="600" href={props.projectUrl ? props.projectUrl : ''} isExternal mt={2} color={textColor}>
            {props.projectTitle} <ExternalLinkIcon />
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
