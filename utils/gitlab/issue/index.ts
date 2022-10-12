import { botSendMessage } from "~/utils/telegram";

export const IssueEvent = async (data: Record<string, unknown>) => {
  const { author, object_kind } = data as {
    object_kind: "issue";
    author: {
      name: string;
    };
  };

  const messageText = `📝 ${object_kind} from ${author.name}`;

  await botSendMessage(messageText);
};
