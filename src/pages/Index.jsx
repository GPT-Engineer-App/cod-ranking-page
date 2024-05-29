import { Container, Text, VStack, Heading, Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

const Index = () => {
  const rankings = [
    { rank: 1, name: "Player1", score: 2500 },
    { rank: 2, name: "Player2", score: 2400 },
    { rank: 3, name: "Player3", score: 2300 },
    { rank: 4, name: "Player4", score: 2200 },
    { rank: 5, name: "Player5", score: 2100 },
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Call of Duty Rankings</Heading>
        <Box overflowX="auto">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rankings.map((player) => (
                <Tr key={player.rank}>
                  <Td>{player.rank}</Td>
                  <Td>{player.name}</Td>
                  <Td>{player.score}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;