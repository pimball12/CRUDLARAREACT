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

    const goBack = () =>  {
        navigate("/");
    }

    return (
        <div className="row">
            <div className="col-sm-6 justify-content-center card">
                <h4>Nome</h4>
                <p>{inputs.name}</p>
                <h4>Email</h4>
                <p>{inputs.email}</p>

                <button type="button" className="btn btn-primary mb-2" onClick={goBack}> Voltar </button>
            </div>
        </div>
    )
}