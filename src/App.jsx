import { useState } from 'react'
import './styles/App.css'
import { InputGeneral } from './components/input/InputGeneral.jsx'
import { InputEducation } from './components/input/InputEducation.jsx'
import { InputExperience } from './components/input/InputExperience.jsx'
import { OutputGeneral } from './components/output/OutputGeneral.jsx'
import { OutputEducation } from './components/output/OutputEducation.jsx'
import { OutputExperience } from './components/output/OutputExperience.jsx'


function App() {
	const initGeneral = {name: "", email: "", phone: ""};
	const [general, setGeneral] = useState(initGeneral);

	// education may become a list in the future to accommodate multiple education entries
	const initEducation = {school: "", degree: "", date: ""};
	const [education, setEducation] = useState(initEducation);

	// function passed to InputGeneral, will call this on button click
  	function updateGeneral(newVals) {
		setGeneral(newVals);
	}

	function updateEducation(newVals) {
		setEducation(newVals);
	}

	return (
		<>
			<h1 id='title'>CV/Resume Builder</h1>

			<main id='mainContent'>

				<section id='inputSections'>
					<InputGeneral onSubmit={updateGeneral} />
					<InputEducation onSubmit={updateEducation} />
					<InputExperience />
				</section>

				<section id='outputSections'>
					<OutputGeneral vals={general} />
					========================================================
					<OutputEducation vals={education}/>
					========================================================
					<OutputExperience />
				</section>

			</main>
		</>
	)
}
export default App
