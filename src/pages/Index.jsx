import { Container, Text, VStack, Heading, Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

const Index = () => {
  const rankings = [
    { rank: 1, name: "Player1", score: 1500 },
    { rank: 2, name: "Player2", score: 1400 },
    { rank: 3, name: "Player3", score: 1300 },
    { rank: 4, name: "Player4", score: 1200 },
    { rank: 5, name: "Player5", score: 1100 },
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">COD Rankings</Heading>
        <Box width="100%" overflowX="auto">
          <Table variant="simple">
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