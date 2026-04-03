import { useState } from 'react'

export function InputGeneral({onSubmit}) {
    // const initVals = {name: "a", email: "b@c", phone: "123"}
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        // sends all input vals up to parent
        onSubmit({name, email, phone});
    }

    return (
        <div id='inputGeneral'>
            <div className='name'>
                <h2>Name:</h2>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name goes here'
                />
            </div>

            <div className='email'>
                <h2>Email:</h2>
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email goes here'
                />
            </div>

            <div className='phone'>
                <h2>Phone</h2>
                <input 
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone goes here'
                />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
