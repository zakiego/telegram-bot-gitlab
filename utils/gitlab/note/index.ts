import { botSendMessage } from "~/utils/telegram";

export const NoteEvent = async (data: Record<string, unknown>) => {
  const { author, object_kind } = data as {
    object_kind: "note";
    author: {
      name: string;
    };
  };

  const messageText = `💬 ${object_kind} from ${author.name}`;

  await botSendMessage(messageText);
};
