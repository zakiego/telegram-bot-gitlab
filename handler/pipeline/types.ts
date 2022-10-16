export interface PipelineEventType {
  object_kind: string;
  object_attributes: ObjectAttributes;
  merge_request: null;
  user: User;
  project: Project;
  commit: Commit;
  builds: any[];
}

export interface Commit {
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

export interface ObjectAttributes {
  id: number;
  ref: string;
  tag: boolean;
  sha: string;
  before_sha: string;
  source: string;
  status: string;
  detailed_status: string;
  stages: string[];
  created_at: Date;
  finished_at: Date;
  duration: number;
  queued_duration: null;
  variables: any[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  web_url: string;
  avatar_url: null;
  git_ssh_url: string;
  git_http_url: string;
  namespace: string;
  visibility_level: number;
  path_with_namespace: string;
  default_branch: string;
  ci_config_path: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  avatar_url: string;
  email: string;
}
