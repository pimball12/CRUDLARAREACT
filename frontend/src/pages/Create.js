import {useState} from "react";
import { useNavigate } from "react-router-dom";
import http from "../http"

export default function Create()    {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) =>     {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const submitForm = () =>    {
        http.post("/users", inputs).then((res) => {
            navigate("/")
        })
    }

    return (
        <div>
            <h2>Novo Usuário</h2>
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

                    <label>Senha</label>
                    <input type="password" name="password" className="form-control mb-2"
                            value={inputs.password || ""}
                            onChange={handleChange}/>

                    <button type="button" className="btn btn-primary mt-2"
                                onClick={submitForm}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}