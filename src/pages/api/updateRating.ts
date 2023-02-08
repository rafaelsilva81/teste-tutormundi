import type { NextApiRequest, NextApiResponse } from "next";

// API node para o rating
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.status(200).json({ ok: true });
}
