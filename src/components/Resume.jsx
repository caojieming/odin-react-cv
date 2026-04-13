export function Resume({data}){
    const general = data.general;
    const education = data.education;
    const experience = data.experience;

    return (
        <div id="resume">
            <div id="outputGeneral">
                <p className="generalName">{general.name}</p>
                <div className="contactMethods">
                    <p className="generalEmail">{general.email}</p>
                    <p className="generalPhone">{general.phone}</p>
                </div>
            </div>
            ========================================================
            <div id="outputEducation">
                {education.map((school) => (
                    <div key={school.id} className="schoolItem">
                        <p className="educationSchool">[{school.schoolName}]</p>
                        <p className="educationDegree">Degree: {school.degree}</p>
                        <p className="educationDate">Completion Date: {school.date}</p>
                    </div>
                ))}
            </div>
            ========================================================
            <div id="outputExperience">
                {experience.map((exp) => (
                    <div key={exp.id} className="companyItem">
                        <p className="experienceCompany">[{exp.companyName}]</p>
                        <p className="experiencePosition">{exp.position}</p>
                        <p className="experienceDate">{exp.startDate} to {exp.endDate}</p>
                        <p className="experienceSummary">{exp.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}