import { saveJson } from "./file";

const GITLAB_ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN;
const GITLAB_API_URL = "https://gitlab.com/api/v4";

export const getGitlabUser = async (userId: number) => {
  const response = await fetch(`${GITLAB_API_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${GITLAB_ACCESS_TOKEN}`,
    },
  }).then((res) => res.json());

  return response as GitlabUser;
};

interface GitlabUser {
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
