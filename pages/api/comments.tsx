import { NextApiRequest, NextApiResponse } from "next";
import { comments, Comment } from "../../data/comments";

const handler = (req: NextApiRequest, res: NextApiResponse<Comment[]>) => {
  res.status(200).json(comments);
};

export default handler;
