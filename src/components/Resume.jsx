export function Resume({data}){
    const general = data.general;
    const education = data.education;
    const experience = data.experience;

    return (
        <div id="resume">
            <div id="outputGeneral">
                <p>Name: {general.name}</p>
                <p>Email: {general.email}</p>
                <p>Phone #: {general.phone}</p>
            </div>
            =========================================
            <div id="outputEducation">
                {education.map((school) => (
                    <div key={school.id}>
                        <p>School: {school.schoolName}</p>
                        <p>Degree: {school.degree}</p>
                        <p>Completion Date: {school.date}</p>
                    </div>
                ))}
            </div>
            =========================================
            <div id="outputExperience">
                placeholder experience
            </div>
        </div>
    );
}