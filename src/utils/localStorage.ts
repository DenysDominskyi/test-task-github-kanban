const LOCAL_STORAGE_PREFIX = "issues_";

export function saveToLocalStorage(repoKey: string, data: { issues: any; owner: string | null; repo: string | null }) {
  localStorage.setItem(`${LOCAL_STORAGE_PREFIX}${repoKey}`, JSON.stringify(data));
}

export function loadFromLocalStorage(repoKey: string) {
  const storedState = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${repoKey}`);
  return storedState ? JSON.parse(storedState) : { issues: [], owner: null, repo: null };
}
