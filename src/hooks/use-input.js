import { useState } from "react";

const useInput = () => {
    const [enteredValue, setEnetredValue] = useState('')
    
    const valueChangeHandler = e => {
        setEnetredValue(e.target.value);
    }

    const reset = () => {
        setEnetredValue('')
    }

    return {
        value: enteredValue,
        valueChangeHandler,
        reset
    };
}
 
export default useInput;