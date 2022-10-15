// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#issue-events

import { getGitlabUser } from "~/utils/gitlab-api";
import { botSendMessage } from "~/utils/telegram";

import { IssueEventType } from "./types";

export const IssueEvent = async (data: unknown) => {
  const { object_attributes, project, assignees } = data as IssueEventType;
  const author = await getGitlabUser(object_attributes.author_id);

  const assignedToText = assignees
    ? " assigned to " + assignees.map((assignee) => assignee.name).join(", ")
    : "";

  const descriptionText =
    object_attributes.description && `\n\n“${object_attributes.description}”`;

  const projectUrlText = `[${project.path_with_namespace}](${project.web_url})`;

  const issueUrlText = `[${object_attributes.title}](${object_attributes.url})`;

  const messageText = `📝 *${author.name}* ${object_attributes.action} the issue ${issueUrlText}${assignedToText} at ${projectUrlText}${descriptionText}`;

  await botSendMessage(messageText);
};
