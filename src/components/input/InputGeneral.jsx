import { useState } from 'react'

export function InputGeneral({onSubmit}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    function handleSubmit() {
        // default values
        if(name === "" && email === "" && phone === "") {
            const defName = "John Doe";
            const defEmail = "johndoe@abc.xyz";
            const defPhone = "123 456 7890";
            setName(defName);
            setEmail(defEmail);
            setPhone(defPhone);
            onSubmit({name: defName, email: defEmail, phone: defPhone});
        }
        else {
            // sends all input vals up to parent
            onSubmit({name, email, phone});
        }
    }

    
    return (
        <div id='inputGeneral' className='inputSection'>
            <div className='name'>
                <h2>Name</h2>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                />
            </div>

            <div className='email'>
                <h2>Email</h2>
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@abc.xyz"
                />
            </div>

            <div className='phone'>
                <h2>Phone</h2>
                <input 
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="123 456 7890"
                />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
