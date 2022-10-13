import nc from "next-connect";
import {NextApiRequest, NextApiResponse} from "next";
import { prisma } from './db';
import {
  createCategory
} from "../../server/controller/category";

const handler = nc();

const category = {
  categoryName: '',
  parentId: 0,
};



const InsertCategory = async() => {
  //const user = await prisma.$queryRaw`SELECT * from User where email= ${category.categoryName}`
  const user = await prisma.category.createMany({
    data:{
      // createdAt: new Date().toLocaleString(),
      category_name: category.categoryName,
      parent_id: category.parentId,
    }
  });
  console.log(user);
}

// const getParentId = async (parm:string) => {
//   const str = parm.replace(/[^a-zA-Z ]/g, "");
//   const category: any = await prisma.$queryRaw`SELECT * from category WHERE parent_id=${str} ORDER BY category_name ASC`;

//   console.log(str);
// }

//For Get operation request

handler.get((req: NextApiRequest, res: NextApiResponse) => {
  res.send("Hello world");
});

//For Post operation request
handler.post((req: NextApiRequest, res: NextApiResponse) => {
  
  category.categoryName = req.body.category;
  category.parentId = +req.body.cateval;

  //Number(str) ----> Convert Str to Number

  InsertCategory();
  res.json({ cat: category });
  //return process.exit(1)
});


export default handler;