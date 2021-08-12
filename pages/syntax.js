import React, {useEffect, useState} from "react"


const Syntax = () => {

    const [checkboxValue, setCheckboxValue] = useState(false);

    useEffect(()=>{
        console.log('in useEffect');

        return () => {
            console.log('in useEffect Cleanup');
        }

    },[checkboxValue])

    return (
        <div><input type="checkbox" checked={checkboxValue} onChange={()=>{setCheckboxValue(!checkboxValue);}}></input></div>
    );

}

export default Syntax;