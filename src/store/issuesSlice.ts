import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";
import { loadIssues } from "@/api/issuesApi";

export enum Status {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface Issue {
  id: string;
  title: string;
  state: "open" | "closed";
  assignee: any; //don't know which type coming
  index: number;
  status: Status;
}

interface IssuesState {
  issues: Issue[];
  owner: string | null;
  repo: string | null;
  loading: boolean;
  error: string | null;
}

const repoKey = localStorage.getItem("lastLoadedRepo") || "";
const firstState: IssuesState = loadFromLocalStorage(repoKey);

const initialState: IssuesState = {
  issues: firstState.issues,
  owner: firstState.owner,
  repo: firstState.repo,
  loading: false,
  error: null,
};

const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    moveIssue: (state, action: PayloadAction<{ issueId: string; newStatus: Status }>) => {
      const { issueId, newStatus } = action.payload;
      const issue = state.issues.find((i) => i.id === issueId);
      if (issue) {
        issue.status = newStatus;
        saveToLocalStorage(`${state.owner}/${state.repo}`, {
          issues: state.issues,
          owner: state.owner,
          repo: state.repo,
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadIssues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadIssues.fulfilled, (state, action) => {
        state.loading = false;
        state.issues = action.payload.issues;
        state.owner = action.payload.owner;
        state.repo = action.payload.repo;
        saveToLocalStorage(`${state.owner}/${state.repo}`, {
          issues: state.issues,
          owner: state.owner,
          repo: state.repo,
        });
      })
      .addCase(loadIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError, moveIssue } = issuesSlice.actions;
export default issuesSlice.reducer;
