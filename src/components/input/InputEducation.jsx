import { useState } from 'react'

export function InputEducation({onSubmit}) {
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [date, setDate] = useState("");


    function handleSubmit() {
        // default values
        if(school === "" && degree === "" && date === "") {
            const defSchool = "University of Something";
            const defDegree = "Bachelors Degree in CS";
            const defDate = "May 1999";
            setSchool(defSchool);
            setDegree(defDegree);
            setDate(defDate);
            onSubmit({school: defSchool, degree: defDegree, date: defDate});
        }
        else {
            // sends all input vals up to parent
            onSubmit({school, degree, date});
        }
    }


    return (
        <div id='inputEducation' className='inputSection'>
            <div className='school'>
                <h2>School Name</h2>
                <input 
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="University of Something"
                />
            </div>

            <div className='degree'>
                <h2>Degree</h2>
                <input 
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    placeholder="Bachelors Degree in CS"
                />
            </div>

            <div className='date'>
                <h2>Completion Date</h2>
                <input 
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="May 1999"
                />
            </div>

            <div className='buttons'>
                <button className='deleteBtn'>Delete</button>
                <button className='submitBtn' onClick={handleSubmit}>Submit</button>
            </div>

            <button id='addEducation'>Add extra Education</button>
            
        </div>
    );
}
