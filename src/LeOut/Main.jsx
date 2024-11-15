import { Outlet } from "react-router-dom";
import Nav from "../Componet/ShearyPass/Nav/Nav";
import Futoor from "../Componet/ShearyPass/Futoor/Futoor";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
         <Outlet />
         <Futoor></Futoor>
        </div>
    );
};

export default Main;