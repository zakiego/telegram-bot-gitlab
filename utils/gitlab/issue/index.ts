import { botSendMessage } from "~/utils/telegram";

export const IssueEvent = async (data: Record<string, unknown>) => {
  const { user, object_kind } = data as {
    object_kind: "issue";
    user: {
      name: string;
    };
  };

  const messageText = `📝 ${object_kind} from ${user.name}`;

  await botSendMessage(messageText);
};
