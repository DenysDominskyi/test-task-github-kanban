import { RootState } from "@/store/store";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const IssueList = () => {
  const { issues, loading, error } = useSelector((state: RootState) => state.store);

  if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <>
      <VStack align="stretch">
        {issues.map((issue) => (
          <Box key={issue.id} p={3} borderWidth="1px" borderRadius="md">
            {issue.title}
          </Box>
        ))}
      </VStack>
    </>
  );
};

export default IssueList;
