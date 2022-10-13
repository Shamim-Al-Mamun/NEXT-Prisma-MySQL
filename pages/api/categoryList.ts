import nc from "next-connect";
import { prisma } from './db';
import { NextApiRequest, NextApiResponse } from "next";
const handler = nc();

interface Type {
  categoryID: number;
  level: string;
}

const arr: Type[] = [];

// const categoryType: Type = {
//   categoryID: 0,
//   level: '',
// };


const cateSubcatTree = async (parent_id: any = null, sub_mark: string = '') => {
  var category: any;

  parent_id == null ?
  category = await prisma.$queryRaw`SELECT * from category WHERE parent_id IS NULL ORDER BY category_name ASC`
  :
  category = await prisma.$queryRaw`SELECT * from category WHERE parent_id = ${parent_id} ORDER BY category_name ASC`

  //category = await prisma.$queryRaw`SELECT * from category WHERE parent_id = ${parent_id} ORDER BY category_name ASC`
  
  //console.log(category);
  let cateList = category.length > 0
    && category.map((item: any, i: any) => {
  
  const categoryType: Type = {
    categoryID: item.id,
    level: sub_mark + item.category_name,
  };
  arr.push(categoryType);
  cateSubcatTree(item.id, sub_mark + "--");
});
    //return arr;
}



handler.post((req: NextApiRequest, res: NextApiResponse) => {



  cateSubcatTree();

  //console.log(arr)        //Now This is perfectly showing values 
  
  // .then(function(result) {
  //   console.log(result); // "initResolve"
  // });

  //console.log(arr);
  res.json({ cat: arr });
  //return process.exit(1)
});
export default handler;  