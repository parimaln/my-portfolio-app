import { Flex, useColorModeValue, Box, Icon, chakra, Image, Link, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { MdHeadset, MdLocationOn, MdEmail, MdCheckCircle, MdSettings } from 'react-icons/md';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { useQuery } from 'urql';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';


const UserCard = () => {
  const ImageQuery = `
    query {
      asset(where: {id: "cksd16wa0lbe00c57ekb84oln"}) {
        url
      }
    }
  `;
  const [result] = useQuery({
    query: ImageQuery,
  });

  const { data } = result;
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg={useColorModeValue("white", "gray.800")}
        shadow="outline"
        rounded="lg"
      >
        <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue("brand.500", "brand.400")}
            alt="Testimonial avatar"
            src={data?.asset?.url}
          />
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            Parimal Naigaonkar
          </chakra.h1>

          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
            Full Stack Lead @ Tata Consultancy Services
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={BsFillBriefcaseFill}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Tata Consultancy Services
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <Link isExternal px={2} fontSize="sm" href={'https://goo.gl/maps/kBmBBCPqJQRTzigW7'}>
              Pune, MH, India <ExternalLinkIcon />
            </Link>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />
            <Link isExternal px={2} fontSize="sm" href={'mailto:parimal.naigaonkar@gmail.com'}>
              parimal.naigaonkar@gmail.com <ExternalLinkIcon />
            </Link>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={FaGithub} h={6} w={6} mr={2} />
            <Link isExternal px={2} fontSize="sm" href={'https://github.com/parimaln/my-portfolio-app'}>
              Made with React, TypeScript, ChakraUI, GraphCMS(GraphQl), view code on github <ExternalLinkIcon />
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default UserCard;