import { PushEvent } from "./push";

export const GitlabHandler = async (data: Record<string, unknown>) => {
  const { object_kind } = data;

  switch (object_kind) {
    case "push":
      await PushEvent(data);
      console.log("Push event");
      break;
    default:
      console.log("Unhandled event", object_kind);
      break;
  }
};
