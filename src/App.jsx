import { useState } from 'react'
import './styles/App.css'
import { InputGeneral } from './components/input/InputGeneral.jsx'
import { InputEducation } from './components/input/InputEducation.jsx'
import { InputExperience } from './components/input/InputExperience.jsx'
import { OutputGeneral } from './components/output/OutputGeneral.jsx'
import { OutputEducation } from './components/output/OutputEducation.jsx'
import { OutputExperience } from './components/output/OutputExperience.jsx'


function App() {

	return (
		<>
			<h1 id='title'>CV/Resume Builder</h1>

			<main id='mainContent'>

				<section id='inputSect'>
					<InputGeneral />
					<InputEducation />
					<InputExperience />
				</section>

				<section id='outputSect'>
					<OutputGeneral />
					<OutputEducation />
					<OutputExperience />
				</section>

			</main>
		</>
	)
}
export default App
