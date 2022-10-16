import { getGitlabUser } from "~/utils/gitlab-api";
import { botSendMessage } from "~/utils/telegram";

import { MergeRequestEventType } from "./types";

export const MergeRequestEvent = async (data: unknown) => {
  const { object_attributes, project } = data as MergeRequestEventType;

  const author = await getGitlabUser(object_attributes.author_id);

  const descriptionText = object_attributes.description
    ? `\n\n${object_attributes.description}}`
    : "";

  const messageText = `🔀 <b>${author.name}</b> ${object_attributes.action} merge request at <a href="${project.web_url}">${project.path_with_namespace}</a>

<b><a href="${object_attributes.url}">${object_attributes.title}</a></b>${descriptionText}`;

  await botSendMessage(messageText);
};
