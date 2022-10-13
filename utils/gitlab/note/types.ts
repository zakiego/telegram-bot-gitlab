// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#comment-events

export interface NoteEventType {
  object_kind: string;
  event_type: string;
  user: User;
  project_id: number;
  project: Project;
  object_attributes: ObjectAttributes;
  repository: Repository;
  commit?: Commit;
  issue?: Issue;
  snippet?: Snippet;
  merge_request?: MergeRequest;
}

export interface Author {
  name: string;
  email: string;
}

export interface ObjectAttributes {
  attachment?: any;
  author_id: number;
  change_position?: any;
  commit_id?: string;
  created_at: Date;
  discussion_id: string;
  id: number;
  line_code: any;
  note: string;
  noteable_id: number;
  noteable_type: string;
  original_position: any;
  position: any;
  project_id: number;
  resolved_at: any;
  resolved_by_id: any;
  resolved_by_push: any;
  st_diff?: StDiff;
  system: boolean;
  type: string;
  updated_at: Date;
  updated_by_id: any;
  description: string;
  url: string;
}

export interface StDiff {
  diff: string;
  new_path: string;
  old_path: string;
  a_mode: string;
  b_mode: string;
  new_file: boolean;
  renamed_file: boolean;
  deleted_file: boolean;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  web_url: string;
  avatar_url?: string;
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
  description: string;
  homepage: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  avatar_url: string;
  email: string;
}

export interface Commit {
  id: string;
  message: string;
  timestamp: Date;
  url: string;
  author: Author;
}

export interface Issue {
  author_id: number;
  closed_at?: Date;
  confidential: boolean;
  created_at: Date;
  description: string;
  discussion_locked: any;
  due_date: any;
  id: number;
  iid: number;
  last_edited_at: Date;
  last_edited_by_id: number;
  milestone_id: any;
  moved_to_id: any;
  duplicated_to_id: any;
  project_id: number;
  relative_position: number;
  state_id: number;
  time_estimate: number;
  title: string;
  updated_at: Date;
  updated_by_id: number;
  weight: any;
  url: string;
  total_time_spent: number;
  time_change: number;
  human_total_time_spent: any;
  human_time_change: any;
  human_time_estimate: any;
  assignee_ids: number[];
  assignee_id: number;
  labels: any[];
  state: string;
  severity: string;
}

export interface Snippet {
  id: number;
  title: string;
  content: string;
  author_id: number;
  project_id: number;
  created_at: string;
  updated_at: string;
  file_name: string;
  type: string;
  visibility_level: number;
  description: string;
  encrypted_secret_token: any;
  encrypted_secret_token_iv: any;
  secret: boolean;
  repository_read_only: boolean;
  secret_token?: string;
}

export interface MergeRequest {
  assignee_id: any;
  author_id: number;
  created_at: string;
  description: string;
  head_pipeline_id: any;
  id: number;
  iid: number;
  last_edited_at: any;
  last_edited_by_id: any;
  merge_commit_sha: any;
  merge_error: any;
  merge_params: MergeParams;
  merge_status: string;
  merge_user_id: any;
  merge_when_pipeline_succeeds: boolean;
  milestone_id: any;
  source_branch: string;
  source_project_id: number;
  state_id: number;
  target_branch: string;
  target_project_id: number;
  time_estimate: number;
  title: string;
  updated_at: string;
  updated_by_id: any;
  url: string;
  source: Project;
  target: Project;
  last_commit: LastCommit;
  work_in_progress: boolean;
  total_time_spent: number;
  time_change: number;
  human_total_time_spent: any;
  human_time_change: any;
  human_time_estimate: any;
  assignee_ids: any[];
  reviewer_ids: any[];
  labels: any[];
  state: string;
  blocking_discussions_resolved: boolean;
  first_contribution: boolean;
}

export interface LastCommit {
  id: string;
  message: string;
  title: string;
  timestamp: Date;
  url: string;
  author: Author;
}

export interface Author {
  name: string;
  email: string;
}

export interface MergeParams {
  force_remove_source_branch: string;
}
