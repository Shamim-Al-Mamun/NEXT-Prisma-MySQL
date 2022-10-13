import CatchAsyncErrors from "../middlewares/CatchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";
import { NextApiRequest, NextApiResponse} from "next";

import nc from "next-connect";
import { prisma } from '../../pages/api/db';
const handler = nc();


const CategoryList = async(req: NextApiRequest, res: NextApiResponse) =>{
  const category: any = await prisma.$queryRaw`SELECT id, parent_id as parentId, category_name as label from category`;
  res.status(201).json({
    category
  });
}

export {CategoryList};
