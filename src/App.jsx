import { useState } from 'react'
import './styles/App.css'
import { InputGeneral } from './components/input/InputGeneral.jsx'
import { InputEducation } from './components/input/InputEducation.jsx'
import { InputExperience } from './components/input/InputExperience.jsx'
import { OutputGeneral } from './components/output/OutputGeneral.jsx'
import { OutputEducation } from './components/output/OutputEducation.jsx'
import { OutputExperience } from './components/output/OutputExperience.jsx'
import { Resume } from './components/output/Resume.jsx'


function App() {

	const [person, setPerson] = useState({
		general: {
			name: "",
			email: "",
			phone: ""
		},
		education: [
			{
				school: "",
				degree: "",
				date: ""
			}
		],
		experience: [
			{
				company: "",
				position: "",
				stardDate: "",
				endDate: "",
				summary: ""
			}
		]
	});

	// const initGeneral = {name: "", email: "", phone: ""};
	// const [general, setGeneral] = useState(initGeneral);

	// education may become a list in the future to accommodate multiple education entries
	// const initEducation = {school: "", degree: "", date: ""};
	// const [education, setEducation] = useState([]);

	// function passed to InputGeneral, will call this on button click
  	function updateGeneral(newVals) {
		let tempGeneral = {...person, general: newVals};
		setPerson(tempGeneral);
	}

	// temp/placeholder for now, implement later
	function updateEducation(newVals) {
		let tempGeneral = {...person, general: newVals};
		setPerson(tempGeneral);
	}

	return (
		<>
			<h1 id='title'>CV/Resume Builder</h1>

			<main id='mainContent'>

				<section id='inputSections'>
					<InputGeneral onSubmit={updateGeneral} />
					<InputEducation onSubmit={updateEducation} />
					
					<InputExperience />
					<button id='addExperience'>Add extra Experience</button>
				</section>

				<section id='outputSections'>
					{/* <OutputGeneral vals={person.general} />
					========================================================
					<OutputEducation vals={person.education}/>
					========================================================
					<OutputExperience /> */}
					<Resume data={person} />
				</section>

			</main>
		</>
	)
}
export default App
