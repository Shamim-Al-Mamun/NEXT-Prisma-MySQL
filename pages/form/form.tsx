import Head from 'next/head'
import { useState } from 'react';
import DynamicTable from './dynamicTable';

import { css, jsx } from '@emotion/react';



const dyFieldCss = css({
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    // position: 'absolute',
    // right: 0,
    // bottom: '2rem',
    // padding: '0.5rem',
    width: '50%',

    //fontFamily: 'sans-serif',
    //fontSize: '1.5rem',
    //boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
});

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/categoryList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    })
    const data = await res.json()
    //console.log(data.cat)

    // Pass data to the page via props
    return { props: { categoryList: JSON.parse(JSON.stringify(data)) } }
}




const Form = ({ categoryList }: any) => {

    const [tablename, setTableName] = useState<string>('');
    const [typeval, setTypeValue] = useState<string>('');
    const [categoryValue, OnesetCategoryValue] = useState<string>('');
    const [message, setMessage] = useState<string>('No category Added.');


    const [inputFields, setInputFields] = useState([
        { name: '' }
    ])

    async function submitForm(e: any) {
        e.preventDefault()

    }

    let DivHead = (props: any) => {
        return (
            <h2>{props.msg}</h2>
        )
    }
    let DivName = () => {
        return (
            <div className="form-group">
                <label htmlFor="Category Name">Template Name</label>
                <input type="text" className="form-control" name="categoryName" id="categoryName" aria-describedby="emailHelp" />
            </div>
        )
    }
    let DivType = () => {
        return (
            <div className="form-group">
                <label htmlFor="Level">Select Type Of Field</label>

                <select className="form-control" value={typeval} onChange={(e) => { setTypeValue(e.target.value); }}>
                    {/* {categoryList.map((item:any,i:any) => ( */}
                    <option>NUMBER</option>
                    <option>TEXT</option>
                    <option>DATE</option>
                    {/* <option key={i} value={`${item.id}`}>{item.category_name}</option> */}
                    {/* ))} */}
                </select>
            </div>
        )
    }


    let cateList = categoryList.cat.length > 0
        && categoryList.cat.map((item: any, i: any) => {
            return (
                <option key={i} value={item.categoryID}>{item.level}</option>
            )
        });


    let CategoryType = (e: any) => {


        return (
            <div className="form-group">
                <label htmlFor="Level">Select Category Type</label>

                <select className="form-control" value={categoryValue} onChange={(e) => { setCategoryValue(e.target.value); }}>
                    {cateList}
                </select>

            </div>
        )
    }

    const handleFormChange = (index: any, event: any) => {
        let data: any = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
        
    }

    const submit = (e: any) => {
        e.preventDefault();
        //Input Field Submittsion Request to store data here....
        console.log(inputFields);
    }
    const removeFields = (index: any) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    }
    let AddRemoveDyField = () => {
        return (
            <div className="card-body">
                <div className="form-group row">
                    <div className="col-lg-4">
                        <ul className="list-group">
                            <form onSubmit={submit} className="form-inline">
                                {inputFields.map((input, index) => {
                                    return (

                                        <div key={index} className="row">
                                            <div className="col-md-6">
                                                <li className="list-group-item btn">
                                                <input
                                                    className="form-control "
                                                    name='name'
                                                    placeholder='Name'
                                                    value={input.name}
                                                    autoFocus
                                                    onChange={event => handleFormChange(index, event)}
                                                />
                                                </li>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <button className="mb-2" onClick={() => removeFields(index)}><i className="btn btn-danger"></i></button>
                                            </div>
                                        </div>

                                    )
                                })}
                                <button className="btn btn-outline-success " onClick={addFields}>Add More</button>
                                <br></br>

                                <button className="btn btn-primary " onClick={submit}>Submit</button>
                            </form>
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    const addFields = () => {
        let newfield = { name: '' }
        setInputFields([...inputFields, newfield])
    }

    let ButtonAction = () => {
        return (
            <div>
                <button className="btn btn-outline-success " onClick={addFields}>Add More</button>
            </div>
        )
    }
    let ButtonSubmit = () => {
        return (
            <div>
                <button className="btn btn-primary " onClick={addFields}>Submit</button>
            </div>
        )
    }
    const handleBodyClick = (event) => {
        console.log('body click')
        event.stopPropagation()
    }

    let CheckBtn = () => {
        <div className='dropdown-body' onClick={handleBodyClick}>
            <div>
                <input type='checkbox' /><span>option 1</span>
            </div>
            <div>
                <input type='checkbox' /><span>option 2</span>
            </div>
        </div>
    }
    return (
        <div>
            <Head>
                <title>Template Form</title>
            </Head>
            <DivHead msg={'Template Building Form'} />
            <form className="mx-auto my-4" style={{ maxWidth: '500px' }} /*onSubmit={checkValidation1}*/>
                <DivName />

                <DivType/>

                <CategoryType />
                {/* {cateList} */}
                <br></br>
                <button type="submit" className="btn btn-dark w-100" onClick={submitForm}>Build</button>
                {/* <DynamicTable /> */}

            </form>
            {/* <AddRemoveInputField /> */}
            <AddRemoveDyField />


            {/* <ButtonAction /> */}
            {/* <ButtonSubmit /> */}
        </div>
    );
};

export default Form;