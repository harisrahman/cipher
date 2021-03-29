import React, { useState } from 'react';
import { FormContext } from './Contexts';
import Centered from "./components/Centered";
import Card from "./components/Card";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import Textarea from "./components/Textarea";
import ToggleButtons from "./components/ToggleButtons";
import crypt from "./workers/Crypt";

function App()
{
	const [formState, setFormState] = useState({
		text: "",
		encrypt: true,
		decrypt: false
	});

	function doCrypt()
	{
		const result = crypt(formState.text, formState.encrypt);

		setFormState({ ...formState, text: result });
	}

	return (
		<Wrapper full>
			<Centered>
				<h1>Encrypt Decrypt Text</h1>
				<Card maxWidth="600px">
					<FormContext.Provider value={[formState, setFormState]}>
						<Wrapper mb="1rem">
							<ToggleButtons name="type" options={["Encrypt", "Decrypt"]}>Encrypt</ToggleButtons>
						</Wrapper>
						<Textarea copy></Textarea>
						<Wrapper center>
							<Button onClick={doCrypt}>Click</Button>
						</Wrapper>
					</FormContext.Provider>
				</Card>
			</Centered>
		</Wrapper >
	);
}

export default App;
