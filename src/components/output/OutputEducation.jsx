// import { useState } from 'react'

export function OutputEducation({vals}) {    
    return (
        <div id='outputEducation'>
            <p>School: {vals.school}</p>
            <p>Degree: {vals.degree}</p>
            <p>Date of Completion: {vals.date}</p>
        </div>
    );
}
