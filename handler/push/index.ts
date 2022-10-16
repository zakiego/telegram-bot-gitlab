/* eslint-disable @typescript-eslint/no-explicit-any */
// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#push-events

import { botSendMessage } from "~/utils/telegram";

import { Commit, Project, PushEventType } from "./types";

export const PushEvent = async (data: any) => {
  const { user_name, commits } = data as PushEventType;

  const messageText = ` 📦 ${user_name} pushed to ${getBranchDisplay(data)}

${CommitsParser(commits)}`;

  await botSendMessage(messageText);
};

const getBranchDisplay = (data: PushEventType) => {
  const { project, ref } = data;
  const branchName = getBranchName(ref);
  const branchPath = project.path_with_namespace + "/" + branchName;
  const branchUrl = getBranchUrl(project, branchName);

  return `<a href="${branchUrl}">${branchPath}</a>`;
};

const getBranchUrl = (project: Project, branchName: string) => {
  return `${project.web_url}/-/tree/${branchName}`;
};

const getBranchName = (ref: string) => {
  const branchName = ref.split("/").pop();
  return branchName as string;
};

const CommitsParser = (commits: Commit[]) => {
  let commitText = "";

  commits.map((commit, index) => {
    const { url, author, title } = commit;

    commitText =
      commitText +
      `<b>${author.name.toLocaleLowerCase()}:</b> <a href="${url}">${title}</a>`;

    if (index !== commits.length - 1) {
      commitText = commitText + "\n";
    }
  });

  return commitText;
};
