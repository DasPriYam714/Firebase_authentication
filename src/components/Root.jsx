import { Outlet } from "react-router-dom";
import Navbar from './Navbar';


const Root = () => {
    return (
        <div className="items-center mx-10">
            <Navbar></Navbar>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;