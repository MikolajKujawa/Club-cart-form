import './form_styling.css'

const BasicForm = () => {
    return ( 
        <form>
            <div>
                <label htmlFor='name'>First Name</label>
                <input type='text' id='name' />
            </div>
            <div>
                <label htmlFor='last_name'>Last Name</label>
                <input type='text' id='last_name' />
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
                <input type='date' id='birth_date' />
            </div>
            <div>
                <label htmlFor='email'>Your email</label>
                <input type='email' id='email' />
            </div>
            <div>
                <label htmlFor='phone_number'>Phone number</label>
                <input type='number' id='phone_number' />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
     );
}
 
export default BasicForm;