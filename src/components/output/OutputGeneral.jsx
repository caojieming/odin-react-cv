// import { useState } from 'react'

export function OutputGeneral({vals}) {
    return (
        <div id='outputGeneral'>
            <p>Name: {vals.name}</p>
            <p>Email: {vals.email}</p>
            <p>Phone #: {vals.phone}</p>
        </div>
    );
}
