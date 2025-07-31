// Page Not Found Error
import React from "react";
import '../../../App.css';
import ButtonComponent from "../UI/ButtonComponent";
import { Link } from "react-router-dom";

const PageNotFound = () =>{
    return(
        <div className="m-5 min-vh-50 p-5 main-bg-color align-content-center">
            <h1 className="text-center">🚧 جاري العمل على هذه الصفحة 🚧 <br/>نحن نعمل حالياً على تطوير هذه الصفحة لتقديم تجربة أفضل.</h1>
            <div className="text-center mt-5">
                <ButtonComponent  to="/" >العودة إلى الصفحة الرئيسية</ButtonComponent>
            </div>
        </div>
    );
}


export default PageNotFound;