import { Route,Routes } from "react-router-dom";
import Home from "./home";
import Predict from "./predict";

export default function Pages() {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />  
                <Route path="/predict" element={<Predict/>} />
            </Routes>
    );
}