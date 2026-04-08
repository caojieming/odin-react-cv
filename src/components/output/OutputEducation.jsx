// import { useState } from 'react'

export function OutputEducation({vals}) {    
    return (
        <div id='outputEducation'>
            {/* for each val in vals */}
            {vals.map(val => (
                <>
                    <p>School: {val.school}</p>
                    <p>Degree: {val.degree}</p>
                    <p>Date of Completion: {val.date}</p>
                </>
            ))}
        </div>
    );
}
