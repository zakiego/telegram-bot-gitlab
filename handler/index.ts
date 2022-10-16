import { IssueEvent } from "./issue";
import { NoteEvent } from "./note";
import { PipelineEvent } from "./pipeline";
import { PushEvent } from "./push";
import { UnknownEvent } from "./unknown";

const GitlabHandler = async (data: Record<string, unknown>) => {
  const { object_kind } = data as { object_kind: EventEnum };

  switch (object_kind) {
    case "push":
      await PushEvent(data);
      break;
    case "note":
      await NoteEvent(data);
      break;
    case "issue":
      await IssueEvent(data);
      break;
    case "pipeline":
      await PipelineEvent(data);
      break;
    default:
      await UnknownEvent(data);
      break;
  }
};

type EventEnum = "push" | "issue" | "note" | "pipeline";

export default GitlabHandler;
