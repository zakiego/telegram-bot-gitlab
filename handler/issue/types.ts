export interface IssueEventType {
  object_kind: string;
  event_type: string;
  user: User;
  project: Project;
  object_attributes: ObjectAttributes;
  labels: any[];
  changes: Changes;
  repository: Repository;
  assignees?: User[];
}

export interface User {
  id: number;
  name: string;
  username: string;
  avatar_url: string;
  email: string;
}

export interface Changes {
  author_id: AuthorID;
  created_at: CreatedAt;
  description: CreatedAt;
  id: AuthorID;
  iid: AuthorID;
  project_id: AuthorID;
  title: CreatedAt;
  updated_at: CreatedAt;
}

export interface AuthorID {
  previous: null;
  current: number;
}

export interface CreatedAt {
  previous: null;
  current: string;
}

export interface ObjectAttributes {
  author_id: number;
  closed_at: null;
  confidential: boolean;
  created_at: string;
  description?: string;
  discussion_locked: null;
  due_date: null;
  id: number;
  iid: number;
  last_edited_at: null;
  last_edited_by_id: null;
  milestone_id: null;
  moved_to_id: null;
  duplicated_to_id: null;
  project_id: number;
  relative_position: null;
  state_id: number;
  time_estimate: number;
  title: string;
  updated_at: string;
  updated_by_id: null;
  weight: null;
  url: string;
  total_time_spent: number;
  time_change: number;
  human_total_time_spent: null;
  human_time_change: null;
  human_time_estimate: null;
  assignee_ids: number[];
  assignee_id: number;
  labels: any[];
  state: string;
  severity: string;
  action: string;
}

export interface Project {
  id: number;
  name: string;
  description: null;
  web_url: string;
  avatar_url: null;
  git_ssh_url: string;
  git_http_url: string;
  namespace: string;
  visibility_level: number;
  path_with_namespace: string;
  default_branch: string;
  ci_config_path: string;
  homepage: string;
  url: string;
  ssh_url: string;
  http_url: string;
}

export interface Repository {
  name: string;
  url: string;
  description: null;
  homepage: string;
}
