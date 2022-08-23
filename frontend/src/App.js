import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import View from './pages/View';
import Delete from "./pages/Delete";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary ">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">Usuários</Link>
          </li>
          <li className="nav-item">
            <Link to={"/create"} className="nav-link">Adicionar</Link>
          </li>
        </div>
      </nav>

      <div className="container m-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
