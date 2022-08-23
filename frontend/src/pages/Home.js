import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import http from "../http"

export default function Home()    {

    const [users, setUsers] = useState([]);
 
    const fetchAllUsers = () =>   {
        http.get('/users').then(res =>  {
            setUsers(res.data);
        })
    }

    useEffect(() =>     {
        fetchAllUsers();
    }, []);

    return (
        <div>
            <h2>Listagem de Usuários</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nº</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ação</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)    => 
                        <tr key={user.id}>
                            <th>{++index}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary" 
                                        to={{pathname:"/edit/"+user.id}}>Editar</Link>
                            </td>
                            <td>
                                <Link className="btn btn-info" 
                                        to={{pathname:"/view/"+user.id}}>Visualizar</Link>
                            </td>
                            <td>
                                <Link className="btn btn-danger" 
                                        to={{pathname:"/delete/"+user.id}}>Excluir</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}