import { Status } from "@/store/issuesSlice";

export interface ColumnType {
    id: Status;
    title: string;
  }
  
  export const COLUMNS: ColumnType[] = [
    { id: Status.TODO, title: "To do" },
    { id: Status.IN_PROGRESS, title: "In Progress" },
    { id: Status.DONE, title: "Done" },
  ];