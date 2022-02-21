import './Introduction.css';
import Icons from "./icons/Icons";

console.log(Icons);
const Introduction = () => (
	<div className={"introduction"}>
		<p>I am a software developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment. I have been worked for 2 years on various programming languages and various frameworks.</p>
		<div className={"icons"}>
			{
				Icons.map(icon => <img src={icon}/>)
			}

		</div>
	</div>
);

export default Introduction;
