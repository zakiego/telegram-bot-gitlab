// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#comment-events

import { has } from "lodash";

import { getGitlabUser } from "~/utils/gitlab-api";
import { botSendMessage } from "~/utils/telegram";

import { NoteEventType } from "./types";

export const NoteEvent = async (data: unknown) => {
  const { object_attributes, project } = data as NoteEventType;

  const noteEvent = noteEventChecker(data as NoteEventType);

  const author = await getGitlabUser(object_attributes.author_id);

  const messageText = `💬 *${author.name}* commented on the ${noteEvent.type} [${noteEvent.title}](${object_attributes?.url}) at [${project.path_with_namespace}](${project.web_url})

“${object_attributes.note}”`;

  await botSendMessage(messageText);
};

const noteEventChecker = (data: NoteEventType) => {
  if (has(data, "commit")) {
    return { type: "commit", title: data.commit?.message };
  }

  if (has(data, "issue")) {
    return { type: "issue", title: data.issue?.title };
  }

  if (has(data, "merge_request")) {
    return { type: "merge request", title: data.merge_request?.title };
  }

  return { type: "snippet", title: data.snippet?.title };
};
