import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http"

export default function Edit(props)    {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    const fetchUser = () =>     {

        http.get("/users/" + id + "/edit").then((res) =>    {

            setInputs({
                name: res.data.name,
                email: res.data.email
            });
        });
    }

    useEffect(() =>     {
        fetchUser();
    }, []);

    const handleChange = (event) =>     {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const submitForm = () =>    {
        http.put("/users/" + id, inputs).then((res) => {
            navigate("/")
        })
    }

    return (
        <div>
            <h2>Editar Usuário</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <label>Nome</label>
                    <input type="text" name="name" className="form-control mb-2"
                            value={inputs.name || ""}
                            onChange={handleChange}/>

                    <label>Email</label>
                    <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ""}
                            onChange={handleChange}/>

                    <button type="button" className="btn btn-primary mt-2"
                            onClick={submitForm}>Alterar</button>
                </div>
            </div>
        </div>
    )
}