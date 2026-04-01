import { useState } from 'react'
import './styles/App.css'
import { InputGeneral } from './components/InputGeneral'
import { InputEducation } from './components/InputEducation'
import { InputExperience } from './components/InputExperience'


function App() {

	return (
		<main id='body'>

			<h1>CV/Resume Builder</h1>

			<section id='input'>
				<InputGeneral />
				<InputEducation />
				<InputExperience />
			</section>

			<section id='output'>

			</section>
		</main>
	)
}
export default App
