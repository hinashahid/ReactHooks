import React,{useState} from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    const onInputChange = (e) => {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value]);
    }

    return <div>
        <input onChange={onInputChange} placeholder="Enter text" />
        <br/>{inputText}
        <hr/><br/>
        {historyList.map((history) => {
            return <div>{history}</div>
        })}

        </div>
}
export default InputElement;