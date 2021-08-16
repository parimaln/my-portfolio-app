import { Flex, useColorModeValue, Box, chakra, Link, Image, Button, Icon, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'urql';

const Intro = () => {
  //   const ImageQuery = `
  //   query {
  //     asset(where: {id: "cksd16wa0lbe00c57ekb84oln"}) {
  //       url
  //     }
  //   }
  // `;
  // const [result] = useQuery({
  //   query: ImageQuery,
  // });

  // const { data } = result;
  const Feature = (props: { children: string }) => {
    return (
      <Flex>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue("brand.500", "brand.300")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
        <chakra.p
          fontSize="lg"
          color={useColorModeValue("gray.700", "gray.400")}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black", "white")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              About Me
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Hello, thanks for landing here and taking your time to read about me 😊
            </chakra.p>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "lg" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              I am a full-stack engineer, having worked on various front-end technologies, mobile apps, web applications, and leading the teams.
            </chakra.p>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "lg" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              In the last 4-5 years I have worked on and led 5 to 6 large-scale enterprise web applications with very high customer satisfaction.
            </chakra.p>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "lg" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Over the course of around 11 years, I have developed, deployed, and maintained multiple projects from scratch.
            </chakra.p>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "lg" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              And this rich experience gives me the ability to help you in the following activities:
            </chakra.p>
            <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <chakra.h2
              mb={3}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black", "white")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              General Experience
            </chakra.h2>
            <Feature>Research & Development</Feature>
            <Feature>Consulting, Solutioning, Pre-sales and estimating tasks</Feature>
            <Feature>Architecture validation, especially UI/UX technical validation</Feature>
            <Feature>Learning/Researching a new technical topic for the project quickly and mentoring the team</Feature>
            <Feature>Mentoring, Enabling and Leading the team, in the mentioned order</Feature>
            <Feature>Architectural reviews, planning and execution processes</Feature>
            <Feature>Work prioritization</Feature>
            <Feature>Interacting with stakeholders such as Client, PM, SME, Architects and Leadership to communicate clear goals and tasks for the dev team</Feature>
            <Feature>Agile and Scrum methodologies</Feature>
            <Feature>Coding and engineering best practice usage in all projects</Feature>
            <Feature>Engineering Management and Product Management</Feature>
          </VStack>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <chakra.h2
              mb={3}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black", "white")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Technical Skills
            </chakra.h2>
            <Feature>Experience in working with different UI frameworks ReactJS with hooks, Angular</Feature>
            <Feature>Typescript, JavaScript, Java</Feature>
            <Feature>Experience in styled-components, story-book, Reactive Programming - RxJS, Webpack</Feature>
            <Feature>Unit, integration, and e2e testing using Jest, cypress</Feature>
            <Feature>State Management Libraries (NgRx, Redux)</Feature>
            <Feature>NodeJS, NestJS, GraphQL/REST, PostgreSQL, MongoDB</Feature>
            <Feature>Cloud Integration/APIfication. Firebase, Azure, AWS Amplify backend, and frontend integration to develop full-stack apps.</Feature>
            <Feature>Experience in setting CI/CD on Azure DevOps, CircleCI, Github Actions, Docker, git, Github, bitbucket</Feature>
            <Feature>Writing maintainable code with design principles and patterns</Feature>
            <Feature>Developing native Android and hybrid applications</Feature>
            <Feature>Experience in working with macOS and iOS development environment</Feature>
            <Feature>Reach 90,000 customers via our integration page</Feature>
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default Intro;
