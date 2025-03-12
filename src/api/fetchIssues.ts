export const fetchIssues = async (repoUrl: string) => {
  try {
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) throw new Error("Invalid GitHub repo URL");

    const [, owner, repo] = match;
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`);
    if (!response.ok) throw new Error("Failed to fetch issues");

    const issues = await response.json();
    return { owner, repo, issues };
  } catch (error) {
    throw error;
  }
};
