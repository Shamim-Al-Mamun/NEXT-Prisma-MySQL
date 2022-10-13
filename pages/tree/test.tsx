import Head from 'next/head'
import { useState } from 'react'



//Getting Category List From Database
// getInitialProps
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/categoryList',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    })
    const data = await res.json()
    //console.log(data.cat)

    // Pass data to the page via props
    return { props: { categoryList: JSON.parse(JSON.stringify(data)) } }
  }

// export const getServerSideProps = async () => {
//     let res: any = await fetch('http://localhost:3000/api/categoryList', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
//         body: JSON.stringify("Passed!!"),
//     }).then(response => response.json())
//         .then(data => {
//             res = data;
//         });

//     //const res = await fetch('/api/query');
//     const data = await res.json();

//     return {
//         props: {
//             categoryList: JSON.parse(JSON.stringify(data))
//         }
//     };
// };

// export async function getServerSideProps() {
//     const categoryList = await prisma.category.findMany();
//     return {
//       props: {
//         categoryList: JSON.parse(JSON.stringify(categoryList))
//       }
//     };
//   }

// export async function cateSubcatTree (parent_id: number= 0, sub_mark:string = ''){
//     const category= await prisma.category.findMany();
// }

const Category = ({ categoryList }: any) => {
    const [category, setCategory] = useState<string>('');
    const [message, setMessage] = useState<string>('No category Added.');
    const [cateval, setValue] = useState<string>('');


    async function submitForm(e: any) {
        e.preventDefault()

        const res = await fetch('/api/createCategory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ category, cateval })
        }).then(response => response.json())
            .then(data => {
                //console.dir(data[0].email);
                if (!data) {
                    setMessage('Someting went wrong!');
                    return;
                }
                setMessage('Created category: ' + data.cat.categoryName);
                //router.push('/profile');
                /*router.push({
                    pathname: '/',
                    query: { pid: data[0].email },
                });*/
            });
    }

      let cateList = categoryList.cat.length > 0
    	&& categoryList.cat.map((item:any, i:any) => {
      return (
        <option key={i} value={item.categoryID}>{item.level}</option>
      )
    });

    return (
        <div>
            <h1 style={{ justifyContent: 'center', alignItems: 'center' }}>{message}</h1>
            <Head>
                <title>Category Page</title>
            </Head>
            
            <form className="mx-auto my-4" style={{ maxWidth: '500px' }} /*onSubmit={checkValidation1}*/>
                <div className="form-group">
                    <label htmlFor="Category Name">Category Name</label>
                    <input type="text" className="form-control" name="categoryName" id="categoryName" aria-describedby="emailHelp" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Level">Select Parent Category</label>

                    <select className="form-control" value={cateval} onChange={(e) => { setValue(e.target.value); }}>
                        {cateList}
                    </select>

                </div>
                <br></br>
                <button type="submit" className="btn btn-dark w-100" onClick={submitForm}>Add</button>
            </form>

        </div>
    )
}

export default Category
