import useInput from '../hooks/use-input';
import './form_styling.css'

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const isPhone = value => value.length === 9;

const BasicForm = () => {
    const {
        value: firstNameValue,
        isValid:firstNameIsValid,
        valueChangeHandler:firstNameChangeHandler,
        reset: resetFirstName,
    } = useInput(isNotEmpty);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        valueChangeHandler: lastNameChangeHandler,
        reset: resetLastName,
    } = useInput(isNotEmpty);
    const{
        value: birthDateValue,
        isValid: birthDateIsValid,
        valueChangeHandler: birthDateChangeHandler,
        reset: resetBirthDate
    } = useInput(isNotEmpty)
    const{
        value: emailValue,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmail
    } = useInput(isEmail)
    const{
        value: phoneNumberValue,
        isValid: phoneNumberIsValid,
        valueChangeHandler: phoneNumberChangeHandler,
        reset: resetPhoneNumber
    } = useInput(isPhone)

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && birthDateIsValid && emailIsValid && phoneNumberIsValid){
        formIsValid = true;
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(!formIsValid){
            return;
        }

        resetFirstName();
        resetLastName();
        resetBirthDate();
        resetEmail();
        resetPhoneNumber();
    }

    return ( 
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>First Name</label>
                <input 
                    type='text' 
                    id='name' 
                    value={firstNameValue}
                    onChange={firstNameChangeHandler}
                />
            </div>
            <div>
                <label htmlFor='last_name'>Last Name</label>
                <input 
                    type='text' 
                    id='last_name' 
                    value={lastNameValue}
                    onChange={lastNameChangeHandler}    
                />
            </div>
            <div>
                <label htmlFor='email'>Gender</label>
                <select>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div>
                <label htmlFor='birth_date'>Birth date</label>
                <input 
                    type='date' 
                    id='birth_date' 
                    value={birthDateValue}
                    onChange={birthDateChangeHandler}
                />
            </div>
            <div>
                <label htmlFor='email'>Your email</label>
                <input 
                    type='email' 
                    id='email' 
                    value={emailValue}
                    onChange={emailChangeHandler}
                />
            </div>
            <div>
                <label htmlFor='phone_number'>Phone number</label>
                <input 
                    type='number' 
                    id='phone_number' 
                    value={phoneNumberValue}
                    onChange={phoneNumberChangeHandler}
                />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
     );
}
 
export default BasicForm;