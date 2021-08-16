import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
export interface ProjectInfo {
  id: string;
  role: string;
  description: string[];
  duration: string;
  company: string
}
export default function OfficialProject(props: ProjectInfo) {
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
            {props.duration}
          </chakra.span>
        </Flex>

        <Box mt={2}>
          <chakra.h2
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline"
            }}
          >
            {props.role}
          </chakra.h2>
          <chakra.h2
            fontSize="xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline"
            }}
          >
            {props.company}
          </chakra.h2>
          {props.description && props.description.map(desc => 
            <chakra.p mt={2} color={textColor}>
            {desc}
          </chakra.p>
            )}
        </Box>
      </Box>
    </Flex>
  );
}
