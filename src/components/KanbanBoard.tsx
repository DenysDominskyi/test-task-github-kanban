import { useDispatch } from "react-redux";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Issue, moveIssue } from "@/store/issuesSlice";
import Column from "./Column";
import { COLUMNS, ColumnType } from "@/constants/ColumnConst";
import { Box } from "@chakra-ui/react";
import { useCallback } from "react";

const KanbanBoard = () => {
  const dispatch = useDispatch();

  const onDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      return;
    }

    const issueId = active.id as string;
    const newStatus = over.id as Issue["status"];

    dispatch(moveIssue({ issueId, newStatus }));
  }, [dispatch]);

  return (
    <Box display={'flex'} justifyContent={'center'} gap={'20px'}>
      {" "}
      <DndContext onDragEnd={onDragEnd}>
        {COLUMNS.map((column: ColumnType) => {
          return <Column key={column.id} title={column.title} droppableId={column.id} />;
        })}
      </DndContext>
    </Box>
  );
};

export default KanbanBoard;
