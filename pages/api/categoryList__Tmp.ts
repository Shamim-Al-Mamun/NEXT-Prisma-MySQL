import nc from "next-connect";
import { prisma } from './db';
import { NextApiRequest, NextApiResponse } from "next";
const handler = nc();

interface Type {
  categoryID: number;
  level: string;
}

const arr: any = [];
// const arr: Type[] = [];
const empty = (arr: any) => arr.length = 0;

// let categoryType = {
//   categoryID: 0,
//   level: '',
// };
const categoryType: Type = {
  categoryID: 0,
  level: '',
};

const cateSubcatTree = async (parent_id: number = 0, sub_mark: string = '') => {
  const category: any = await prisma.$queryRaw`SELECT * from category WHERE parent_id=${parent_id} ORDER BY category_name ASC`;

  let cateList = category.length > 0
    && category.map((item: any, i: any) => {
      categoryType.categoryID = item.id;
      categoryType.level = sub_mark + item.category_name;
      //console.log(categoryType);
      // console.log(categoryType.level);
      // arr[j] = categoryType; j++;           // <option key={i} value={item.id}>{item.category_name}</option>
      arr.push(categoryType);            // <option key={i} value={item.id}>{item.category_name}</option>
      //console.log(arr)
      //console.log(arr.length)
      cateSubcatTree(item.id, sub_mark + "--")
    });
}



handler.post((req: NextApiRequest, res: NextApiResponse) => {



  //console.log(req.body);

  //empty(arr);
  //arr: any[] = [];

  //empty(arr);

  // console.log(arr)
  cateSubcatTree();
  console.log(arr);
  res.json({ cat: arr });
  //return process.exit(1)
});
export default handler;  