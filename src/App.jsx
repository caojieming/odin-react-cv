import { useState } from 'react'
import './styles/App.css'
import './styles/Inputs.css'
import './styles/Resume.css'
import { InputGeneral } from './components/InputGeneral.jsx'
import { InputEducation } from './components/InputEducation.jsx'
import { InputExperience } from './components/InputExperience.jsx'
import { Resume } from './components/Resume.jsx'


function App() {
	const initPerson =
	{
		general: {
			name: "",
			email: "",
			phone: ""
		},
		education: [
			{
				id: crypto.randomUUID(),
				schoolName: "",
				degree: "",
				date: ""
			}
		],
		experience: [
			{
				id: crypto.randomUUID(),
				companyName: "",
				position: "",
				startDate: "",
				endDate: "",
				summary: ""
			}
		]
	};
	const [person, setPerson] = useState(initPerson);


	// function passed to InputGeneral, called when onChange is called up in InputGeneral
  	function updateGeneral(newVals) {
		const updatedGeneral = {...person, general: newVals};
		setPerson(updatedGeneral);
	}

	function updateEducation(newVals) {
		const updatedEducation = {...person, education: newVals};
		setPerson(updatedEducation);
	}

	function updateExperience(newVals) {
		const updatedExperience = {...person, experience: newVals};
		setPerson(updatedExperience);
	}

	return (
		<>
			<h1 id='title'>CV/Resume Builder</h1>

			<main id='mainContent'>

				<section id='inputSections'>
					<InputGeneral data={person.general} onChange={updateGeneral} />
					<InputEducation data={person.education} onChange={updateEducation} />
					<InputExperience data={person.experience} onChange={updateExperience} />
				</section>

				<section id='outputSections'>
					<Resume data={person} />
				</section>

			</main>
		</>
	)
}
export default App
