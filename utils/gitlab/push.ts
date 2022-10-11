/* eslint-disable @typescript-eslint/no-explicit-any */
import { gitlabCommitUrl } from "../gitlab-url";
import { botSendMessage } from "../telegram";

export const PushEvent = async (data: any) => {
  const { user_name, project, commits, checkout_sha } = data as PushEventType;

  const messageText = ` 📦 ${user_name} [pushed](${gitlabCommitUrl(
    project.web_url,
    checkout_sha,
  )}) to [${project.path_with_namespace}](${project.web_url}):
  
${CommitsParser(commits)}`;

  await botSendMessage(messageText);
};

const CommitsParser = (commits: Commit[]) => {
  let commitText = "";

  commits.map((commit, index) => {
    const { url, author, title } = commit;

    commitText =
      commitText + `*${author.name.toLocaleLowerCase()}:* [${title}](${url})`;

    if (index !== commits.length - 1) {
      commitText = commitText + "\n";
    }
  });

  return commitText;
};

export interface PushEventType {
  object_kind: string;
  event_name: string;
  before: string;
  after: string;
  ref: string;
  checkout_sha: string;
  user_id: number;
  user_name: string;
  user_username: string;
  user_email: string;
  user_avatar: string;
  project_id: number;
  project: Project;
  repository: Repository;
  commits: Commit[];
  total_commits_count: number;
}

export interface Commit {
  id: string;
  message: string;
  title: string;
  timestamp: Date;
  url: string;
  author: Author;
  added: string[];
  modified: string[];
  removed: any[];
}

export interface Author {
  name: string;
  email: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  web_url: string;
  avatar_url: string;
  git_ssh_url: string;
  git_http_url: string;
  namespace: string;
  visibility_level: number;
  path_with_namespace: string;
  default_branch: string;
  homepage: string;
  url: string;
  ssh_url: string;
  http_url: string;
}

export interface Repository {
  name: string;
  url: string;
  description: string;
  homepage: string;
  git_http_url: string;
  git_ssh_url: string;
  visibility_level: number;
}
