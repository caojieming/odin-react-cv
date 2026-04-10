
export function InputExperience({data, onChange}) {
    const expList = data;


    function handleChange(index, field, newVal) {
        // loop through the list
        const newExpList = expList.map((exp, ind) => {
            if (ind === index) {
                // make the change
                return {...exp, [field]: newVal};
            }
            return exp;
        });
        onChange(newExpList);
    }

    function deleteExperience(index) {
        // simply delete the record at index from expList
        const updatedList = [...expList];
        updatedList.splice(index, 1);
        onChange(updatedList);
    }

    function addExperience() {
        // simply append a new blank record to expList
        const newExperience = {
            id: crypto.randomUUID(),
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
            summary: ""
        };

        const updatedList = [...expList];
        updatedList.push(newExperience);
        onChange(updatedList);
    }


    return (
        <div id='inputExperience' className='inputSection'>
            <div id='expList'>

                {
                expList.map((exp, index) => {
                    return (
                        <div key={exp.id} className="exp">
                            <h2>Company Name</h2>
                            <input
                                type="text"
                                id={exp.id}
                                placeholder="We Do Stuff Corp."
                                value={exp.companyName}
                                onChange={(e) => handleChange(index, "companyName", e.target.value)}
                            />

                            <h2>Position</h2>
                            <input
                                type="text"
                                placeholder="Human Resources"
                                value={exp.position}
                                onChange={(e) => handleChange(index, "position", e.target.value)}
                            />

                            <h2>Start Date</h2>
                            <input
                                type="date"
                                // placeholder=""
                                value={exp.startDate}
                                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                            />

                            <h2>End Date</h2>
                            <input
                                type="date"
                                // placeholder=""
                                value={exp.endDate}
                                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                            />

                            <h2>Summary</h2>
                            <input
                                type="text"
                                placeholder="I help people."
                                value={exp.summary}
                                onChange={(e) => handleChange(index, "summary", e.target.value)}
                            />

                            <div className='buttons'> 
                                <button onClick={() => deleteExperience(index)}>Delete</button >
                            </div>
                        </div>
                    );
                })}
            {/* div expList closer */}
            </div>

            <button id='addExperience' onClick={() => addExperience()}>Add extra Experience</button>

        </div>
    );
}
