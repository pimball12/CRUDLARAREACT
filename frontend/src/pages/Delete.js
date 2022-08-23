import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http"

export default function View(props)    {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    const fetchUser = () =>     {

        http.get("/users/" + id).then((res) =>    {

            setInputs({
                name: res.data.name,
                email: res.data.email
            });
        });
    }

    useEffect(() =>     {
        fetchUser();
    }, []);

    const deleteUser = () =>    {
        http.delete("/users/" + id).then((res) => {
            navigate("/");
        });
    }

    const goBack = () =>  {
        navigate("/");
    }

    return (
        <div className="row">
            <div className="col-sm-6 justify-content-center card">
                <h4>Deseja deletar o usuário {inputs.name} ?</h4>
                <button type="button" className="btn btn-danger mt-2"
                                onClick={deleteUser}>Sim</button>
                <button type="button" className="btn btn-primary mt-2 mb-2"
                                onClick={goBack}>Não</button>
            </div>
        </div>
    )
}