export const gitlabProfileUrl = (username: string) =>
  `https://gitlab.com/${username}`;

export const gitlabCommitUrl = (
  project_web_url: string,
  checkout_sha: string,
) => `${project_web_url}/-/commit/${checkout_sha}`;
