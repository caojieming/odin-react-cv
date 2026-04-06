import { useState } from 'react'

export function InputGeneral({onSubmit}) {
    // const initVals = {name: "a", email: "b@c", phone: "123"}
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [isReadOnly, setReadOnly] = useState(false);
    const [btnText, setBtnText] = useState("Submit");


    // submit/edit button use the same button
    function handleSubmitEdit() {
        // button text = Submit
        if(btnText === "Submit") {
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

            // set inputs to read only
            setReadOnly(true);
            // convert button text to "Edit"
            setBtnText("Edit");
        }

        // button text = Edit
        else {
            // set inputs to write
            setReadOnly(false);

            // convert button text to "Submit"
            setBtnText("Submit");
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
                    readOnly={isReadOnly}
                />
            </div>

            <div className='email'>
                <h2>Email</h2>
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@abc.xyz"
                    readOnly={isReadOnly}
                />
            </div>

            <div className='phone'>
                <h2>Phone</h2>
                <input 
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="123 456 7890"
                    readOnly={isReadOnly}
                />
            </div>

            <button onClick={handleSubmitEdit}>{btnText}</button>
        </div>
    );
}
