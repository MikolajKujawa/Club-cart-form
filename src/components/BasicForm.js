import useInput from '../hooks/use-input';
import './form_styling.css'

const BasicForm = () => {

    const{
        value: firstNameValue,
        valueChangeHandler:firstNameChangeHandler,
    } = useInput()
    const{
        value: lastNameValue,
        valueChangeHandler:lastNameChangeHandler,
    } = useInput()
    const{
        value: birthDateValue,
        valueChangeHandler:birthDateChangeHandler,
    } = useInput()
    const{
        value: emailValue,
        valueChangeHandler:emailChangeHandler,
    } = useInput()
    const{
        value: phoneNumberValue,
        valueChangeHandler:phoneNumberChangeHandler,
    } = useInput()

    const submitHandler = (e) => {
        e.preventDefault();
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