import { useSelector } from "react-redux";
import IssueCard from "./IssueCard";
import { Box, Heading } from "@chakra-ui/react";
import { RootState } from "@/store/store";
import { useDroppable } from "@dnd-kit/core";
import { useMemo } from "react";

interface ColumnProps {
  title: string;
  droppableId: string;
}

const Column: React.FC<ColumnProps> = ({ title, droppableId }) => {
  const issues = useSelector((state: RootState) => state.store.issues);
  const columnIssues = useMemo(()=>(
    issues.filter((issue) => issue.status === droppableId)
  ), [issues, droppableId])

  const { setNodeRef } = useDroppable({ id: droppableId });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: "300px",
        padding: "10px",
        border: "1px solid #ccc",
        backgroundColor: "#f8f9fa",
        minHeight: "100px",
      }}
    >
      <Heading>{title}</Heading>
      <Box>
        {columnIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </Box>
    </div>
  );
};

export default Column;
