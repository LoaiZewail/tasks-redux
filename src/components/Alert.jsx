import React, { useEffect } from 'react';
import './Alert.css'

function Alert({type,message,showAlert}) {
    
    useEffect(()=>{
            const timeout = setTimeout(()=>{
                showAlert();
            },3000)

            return ()=> clearTimeout(timeout);
    },[showAlert]);

    return (
        <div>
            <p className={`alert ${type}`}>{message}</p>
        </div>
    )
}

export default Alert;
