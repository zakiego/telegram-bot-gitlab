import { GitlabUser } from "./types";

const GITLAB_ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN;
const GITLAB_API_URL = "https://gitlab.com/api/v4";

interface FetchAPI {
  endpoint: "users";
  params: string;
}

const fetchAPI = async ({ endpoint, params }: FetchAPI) => {
  return await fetch(`${GITLAB_API_URL}/${endpoint}/${params}`, {
    headers: {
      Authorization: `Bearer ${GITLAB_ACCESS_TOKEN}`,
    },
  }).then((res) => res.json());
};

export const getGitlabUser = async (userId: number) => {
  const response = await fetchAPI({
    endpoint: "users",
    params: userId.toString(),
  });

  return response as GitlabUser;
};
