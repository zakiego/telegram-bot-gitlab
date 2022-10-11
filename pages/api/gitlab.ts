import type { NextApiRequest, NextApiResponse } from "next";

import { GitlabHandler } from "~/utils/gitlab";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await GitlabHandler(req.body);

  res.status(200).json({ ok: true });
};

export default handler;
