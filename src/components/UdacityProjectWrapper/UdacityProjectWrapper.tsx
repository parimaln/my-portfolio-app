import { Flex, useColorModeValue } from '@chakra-ui/react';
import UdacityProject, { UdacityProjectInfo } from 'components/UdacityProject/UdacityProject';
import React from 'react';
import { useQuery } from 'urql';


const UdacityProjectWrapper = () => {
  const ProjectQuery = `
  query ProjectQuery {
    udacityProjects(orderBy: sequence_ASC) {
      curriculum
      learning
      id
      projectTitle
      projectType
      projectUrl
    }
  }
  `;
  const [result] = useQuery({
    query: ProjectQuery,
  });

  const { data, fetching } = result;
  const [projects, setProjects] = React.useState<UdacityProjectInfo[]>([])
  React.useEffect(() => {
    if (!fetching && data && data.udacityProjects) {
      setProjects(data.udacityProjects)
    }
  }, [data, fetching])
  return (
    <Flex
      flexDirection='column'
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={5}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      {projects.map(project => <UdacityProject
        id={project.id}
        key={project.id}
        curriculum={project.curriculum}
        learning={project.learning}
        projectTitle={project.projectTitle}
        projectType={project.projectType}
        projectUrl={project.projectUrl}
      />)}
    </Flex>
  );
}

export default UdacityProjectWrapper;
