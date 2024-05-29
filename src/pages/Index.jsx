import { Container, Text, VStack, Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  // Sample data for ranking
  const rankingData = [
    { rank: 1, player: "Player1", score: 1500 },
    { rank: 2, player: "Player2", score: 1450 },
    { rank: 3, player: "Player3", score: 1400 },
    { rank: 4, player: "Player4", score: 1350 },
    { rank: 5, player: "Player5", score: 1300 },
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">COD Ranking</Heading>
        <Box width="100%" overflowX="auto">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Player</Th>
                <Th>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rankingData.map((data) => (
                <Tr key={data.rank}>
                  <Td>{data.rank}</Td>
                  <Td>{data.player}</Td>
                  <Td>{data.score}</Td>
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