import Centered from "./components/Centered";
import Card from "./components/Card";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import Textarea from "./components/Textarea";
import ToggleButtons from "./components/ToggleButtons";

function App()
{
	return (
		<Wrapper full>
			<Centered>
				<h1>Encrypt Decrypt Text</h1>
				<Card maxWidth="600px">
					<Wrapper mb="1rem">
						<ToggleButtons name="type" options={["Encrypt", "Decrypt"]}>Encrypt</ToggleButtons>
					</Wrapper>
					<Textarea></Textarea>
					<Wrapper center>
						<Button>Click</Button>
					</Wrapper>
				</Card>
			</Centered>
		</Wrapper >
	);
}

export default App;
