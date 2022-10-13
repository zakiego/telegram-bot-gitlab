import type { NextApiRequest, NextApiResponse } from "next";

import GitlabHandler from "~/handler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await GitlabHandler(req.body);

  res.status(200).json({ ok: true });
};

export default handler;
