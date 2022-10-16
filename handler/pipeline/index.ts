// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#pipeline-events

import { botSendMessage } from "~/utils/telegram";

import { PipelineEventType } from "./types";

export const PipelineEvent = async (data: unknown) => {
  const {
    object_attributes: { id, detailed_status },
    project,
    commit,
  } = data as PipelineEventType;

  const projectUrlText = `<a href="${project.web_url}">${project.path_with_namespace}</a>`;

  const pipelineUrlText = `${createPipelineUrl(project, id)}`;

  const messageText = `⚙️ Pipeline <a href="${pipelineUrlText}">${commit.title}</a> is <b>${detailed_status}</b> at ${projectUrlText}`;

  await botSendMessage(messageText);
};

const createPipelineUrl = (
  project: PipelineEventType["project"],
  pipelineId: number,
) => `${project.web_url}/-/pipelines/${pipelineId}`;
