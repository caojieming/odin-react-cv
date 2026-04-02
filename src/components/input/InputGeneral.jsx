import { useState } from 'react'

export function InputGeneral() {
    // const [person, setPerson] = useState(0);
    
    return (
        <div id='inputGeneral'>
            <div className='name'>
                <h2>Name:</h2>
                <input type="text" />
            </div>

            <div className='email'>
                <h2>Email:</h2>
                <input type="text" />
            </div>

            <div className='phone'>
                <h2>Phone</h2>
                <input type="text" />
            </div>

            <button>Submit</button>
        </div>
    );
}
