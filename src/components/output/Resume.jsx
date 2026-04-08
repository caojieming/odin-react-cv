export function Resume({data}){
    const general = data.general;
    const education = data.education;
    const experience = data.experience;

    return (
        <div id="resume">
            <div id='outputGeneral'>
                <p>Name: {general.name}</p>
                <p>Email: {general.email}</p>
                <p>Phone #: {general.phone}</p>
            </div>
        </div>
    );
}