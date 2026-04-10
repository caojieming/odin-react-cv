// import { useState } from 'react'

export function InputEducation({data, onChange}) {
    // basically just gave data an alias of schoolList
    const schoolList = data;


    function handleChange(index, field, newVal) {
        // loop through the list
        const newSchoolList = schoolList.map((school, ind) => {
            if (ind === index) {
                // make the change
                return {...school, [field]: newVal};
            }
            return school;
        });
        onChange(newSchoolList);
    }

    function deleteSchool(index) {

    }

    function addSchool() {

    }


    return (
        <div id='inputEducation' className='inputSection'>

            <div id='schoolList'>

                {
                schoolList.map((school, index) => {
                    return (
                        <div key={school.id}>
                            <h2>School Name</h2>
                            <input
                                type="text"
                                id={school.id}
                                placeholder="University of Something"
                                value={school.schoolName}
                                onChange={(e) => handleChange(index, "schoolName", e.target.value)}
                            />

                            <h2>Degree</h2>
                            <input
                                type="text"
                                placeholder="Bachelors Degree in CS"
                                value={school.degree}
                                onChange={(e) => handleChange(index, "degree", e.target.value)}
                            />

                            <h2>Completion Date</h2>
                            <input
                                type="text"
                                placeholder="May 1999"
                                value={school.date}
                                onChange={(e) => handleChange(index, "date", e.target.value)}
                            />

                            <div className='buttons'> 
                                <button onClick={() => deleteSchool(index)}>Delete</button >
                            </div>
                        </div>
                    );
                })}
            {/* div schoolList closer */}
            </div>

            {/* button at the end of education input section to add additional school */}
            <button id='addEducation' onClick={() => addSchool()}>Add extra Education</button>

        </div>
    );
}
