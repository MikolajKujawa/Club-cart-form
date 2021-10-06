import { useState } from "react";

const useInput = () => {
    const [enteredValue, setEnetredValue] = useState('')
    
    const valueChangeHandler = e => {
        setEnetredValue(e.target.value);
    }

    return {
        value: enteredValue,
        valueChangeHandler
    };
}
 
export default useInput;