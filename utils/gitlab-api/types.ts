export interface GitlabUser {
  id: number;
  username: string;
  name: string;
  state: string;
  avatar_url: string;
  web_url: string;
  created_at: Date;
  bio: string;
  location: null | string;
  public_email: string;
  skype: string;
  linkedin: string;
  twitter: string;
  website_url: string;
  organization: null | string;
  job_title: string;
  pronouns: null | string;
  bot: boolean;
  work_information: null | string;
  followers: number;
  following: number;
  is_followed: boolean;
  local_time: string;
}
