import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from '../UI/ButtonComponent';
import IconButton from "../../Header/IconButton";
import { Globe } from "lucide-react";
import '../../../App.css'
import { useState } from 'react';



const SelectLangBtn = () =>{
    const AR = 'العربية';
    const EN = 'English';
    const [showLangOptions, setShowLangOptions] = useState(AR);

    const toggleLangOptions = () => {
        setShowLangOptions(showLangOptions === AR ? EN : AR);
    };
    return(
        <>
            <div class="language-switcher mr-4 p-2">
                <IconButton icon={Globe} >
                    <span>{showLangOptions}</span>
                </IconButton>
                <div className="language-options ">
                    ({(showLangOptions !== AR)?
                    (<a onClick={toggleLangOptions} href="#">{AR}</a>):
                    (<a onClick={toggleLangOptions} href="#">{EN}</a>)})
                </div>
            </div>
        </>
    );
};

export default SelectLangBtn;