import { Container } from "@chakra-ui/react";
import RepoSearch from "./components/RepoSearch";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <Container maxW="container.md" p={4}>
      <RepoSearch />
      <KanbanBoard />
    </Container>
  );
}

export default App;
