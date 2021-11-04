import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnetredValue] = useState('')

    const valueIsValid = validateValue(enteredValue)
    
    const valueChangeHandler = e => {
        setEnetredValue(e.target.value);
    }

    const reset = () => {
        setEnetredValue('')
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        valueChangeHandler,
        reset
    };
}
 
export default useInput;