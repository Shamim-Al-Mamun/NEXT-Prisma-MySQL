import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";

enum IFormEnum {
    female = "female",
    male = "male",
    other = "other"
}

interface IFormInput {
    firstName: String;
    gender: IFormEnum;
}

let DivHead = (props: any) => {
    return (
        <h2>{props.msg}</h2>
    )
}

const InputFields = () => {

}

export default function App() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <div>
            <Head>
                <title>Template Form</title>
            </Head>

            <center><DivHead msg={'Template Building Form'} /></center>
            <div className="card-body">
                <div className="form-group row">
                    <div className="col-lg-4">
                        <ul className="list-group">
                            <div className="col-md-6">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label>First Name</label>
                                    <input className="form-control" {...register("firstName")} />
                                    <label>Gender Selection</label>
                                    <select {...register("gender")} >
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                    <input className="btn btn-primary" type="submit" />
                                </form>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
