import nc from "next-connect";
import { prisma } from './db';
import { NextApiRequest, NextApiResponse } from "next";
import {CategoryList} from "../../server/controller/category";
const handler = nc();

handler.get(CategoryList)

handler.post((req: NextApiRequest, res: NextApiResponse) => {
    
});
export default handler;