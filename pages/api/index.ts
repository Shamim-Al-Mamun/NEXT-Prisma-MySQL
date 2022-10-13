import { connectDB } from "../../server/config/config";
import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc();
connectDB();

export default handler;