import { useState } from "react";
import { Input, Button, Flex, Spinner, Text, Container, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "@/store/issuesSlice";
import { AppDispatch, RootState } from "@/store/store";
import { loadIssues } from "@/api/issuesApi";

const RepoSearch = () => {
  const [url, setUrl] = useState("");
  const { owner, repo, loading, error } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch<AppDispatch>();

  const handleLoad = () => {
    if (url.trim()) {
      dispatch(loadIssues(url.trim()));
      setUrl("");
    }
  };

  return (
    <Container>
      <Flex gap={2} mb={4}>
        <Input
          placeholder="Enter repo URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onFocus={() => dispatch(setError(null))}
        />
        <Button colorScheme="blue" onClick={handleLoad} disabled={loading}>
          {loading ? <Spinner size="sm" /> : "Load issues"}
        </Button>
      </Flex>

      {error && <Text color="red.500">{error}</Text>}

      {owner && repo && (
        <Flex mt={2} mb={4} gap={3}>
          <Link href={`https://github.com/${owner}`} color="blue.500">
            {owner}
          </Link>
          <span>{">"}</span>
          <Link href={`https://github.com/${owner}/${repo}`} color="blue.500">
            {repo}
          </Link>
        </Flex>
      )}
    </Container>
  );
};

export default RepoSearch;
