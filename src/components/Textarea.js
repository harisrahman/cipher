import React, { useContext } from 'react';
import styled from 'styled-components';
import CopyBtn from "./CopyBtn";
import { FormContext } from '../Contexts';

function Textarea(props)
{
	const [form, setForm] = useContext(FormContext);

	return (
		<FormContext.Consumer>
			{formContext =>
				<Wrapper>
					{props.copy && <CopyBtn style={{ position: "absolute", right: "5px", top: "5px" }} text={formContext[0].text} ></CopyBtn>}
					<Main {...props} onChange={(e) => setForm({ ...formContext[0], text: e.target.value })} value={formContext[0].text}>
						{props.children}
					</Main>
				</Wrapper>
			}
		</FormContext.Consumer>
	);
}

const Wrapper = styled.div`
	position: relative;
`;

const Main = styled.textarea`
	display: block;
    width: 100%;
    min-height: 180px;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
	margin-bottom: 1rem;
	overflow: auto;
    resize: vertical;

	&:focus
	{
		color: #495057;
		background-color: #fff;
		border-color: #80bdff;
		outline: 0;
		box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
	}
`;

export default Textarea;
