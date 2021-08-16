import { Flex, useColorModeValue, Box, SimpleGrid } from '@chakra-ui/react';
import OfficialProject, { ProjectInfo } from 'components/OfficialProject/OfficialProject';
import React from 'react';
import { useQuery } from 'urql';


const ProjectListWrapper = () => {
  const ProjectQuery = `
  query ProjectQuery {
    projects(orderBy: sequence_ASC) {
      role
      company
      description
      duration
    }
  }
  `;
  const [result] = useQuery({
    query: ProjectQuery,
  });

  const { data, fetching } = result;
  const [projects, setProjects] = React.useState<ProjectInfo[]>([])
  React.useEffect(() => {
    if (!fetching && data && data.projects) {
      setProjects(data.projects)
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
      {projects.map(project => <OfficialProject
            id={project.id}
            key={project.id}
            company={project.company}
            description={project.description}
            duration={project.duration}
            role={project.role} />)}
    </Flex>
  );
}

export default ProjectListWrapper;
