// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#pipeline-events

import { botSendMessage } from "~/utils/telegram";

import { PipelineEventType } from "./types";

export const PipelineEvent = async (data: unknown) => {
  const {
    object_attributes: { id, detailed_status },
    project,
    commit,
  } = data as PipelineEventType;

  const projectUrlText = `[${project.path_with_namespace}](${project.web_url})`;

  const pipelineUrlText = `${createPipelineUrl(project, id)}`;

  const messageText = `⚙️ Pipeline [${commit.title}](${pipelineUrlText}) is *${detailed_status}* at ${projectUrlText} `;

  await botSendMessage(messageText);
};

const createPipelineUrl = (
  project: PipelineEventType["project"],
  pipelineId: number,
) => `${project.web_url}/-/pipelines/${pipelineId}`;
