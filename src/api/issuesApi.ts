import { Issue, Status } from "@/store/issuesSlice";
import { loadFromLocalStorage } from "@/utils/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIssues } from "./fetchIssues";

export const loadIssues = createAsyncThunk("issues/loadIssues", async (repoUrl: string, { rejectWithValue }) => {
    try {
      const {owner, repo, issues} = await fetchIssues(repoUrl);
      const repoKey = `${owner}/${repo}`;
      localStorage.setItem("lastLoadedRepo", repoKey);
      const storedData = loadFromLocalStorage(repoKey);
      if (storedData.owner === owner && storedData.repo === repo) {
        return storedData;
      }
      return {
        owner,
        repo,
        issues: issues.map(
          (issue: Issue): Issue => ({
            ...issue,
            status: issue.state === "open" ? (issue.assignee ? Status.IN_PROGRESS : Status.TODO) : Status.DONE,
          })
        )
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch issues.");
    }
  });