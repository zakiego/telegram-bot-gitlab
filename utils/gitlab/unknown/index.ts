import { botSendMessage } from "~/utils/telegram";

export const UnknownEvent = async (data: Record<string, unknown>) => {
  const { user_name, object_kind } = data as {
    object_kind: string;
    user_name: string;
  };

  const messageText = `🤔 Unknown event: ${object_kind} from ${user_name}`;

  await botSendMessage(messageText);
};
