import React,{useState, useRef} from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    const inputRef = useRef();

    const onInputChange = (e) => {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value]);
    }

    const focus = () => {
        inputRef.current.focus();
    }

    return <div>
        <input ref={inputRef} onChange={onInputChange} placeholder="Enter text" />
        <br/>{inputText}
        <hr/><br/>
        {historyList.map((history) => {
            return <div>{history}</div>
        })}
        <button onClick={focus}>Focus Input box</button>
        </div>
}
export default InputElement;