// import { useState } from 'react'

export function InputGeneral({data, onChange}) {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;

    function handleChange(field, newVal) {
        // sends up the changed/update field values
        onChange({...data, [field]: newVal});
    }

    return (
        <div id='inputGeneral' className='inputSection'>
            <div className='name'>
                <h2>Name</h2>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Doe"
                />
            </div>

            <div className='email'>
                <h2>Email</h2>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="johndoe@abc.xyz"
                />
            </div>

            <div className='phone'>
                <h2>Phone</h2>
                <input 
                    type="tel"
                    value={phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="123 456 7890"
                />
            </div>
        </div>
    );
}
