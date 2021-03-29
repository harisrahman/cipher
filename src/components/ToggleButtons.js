import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormContext } from '../Contexts';

function ToggleButtons(props)
{
	const [form, setForm] = useContext(FormContext);

	const options = props.options.map((option, index) =>
	{
		return {
			title: option,
			name: option.toLowerCase(),
			checked: index === 0
		};
	});

	function setToggleHandler(e)
	{
		let modified_form = form;

		options.map((option, index) =>
		{
			modified_form[option.name] = option.name == e.target.dataset.optionname;

		}, modified_form);

		setForm(modified_form);
	}

	return (
		<Main style={{ ...props.style }}>
			{
				options.map((option, index) =>
					<label key={index}>
						<input name={props.name} type="radio" defaultChecked={option.checked} onChange={setToggleHandler} data-optionname={option.name} />
						<span>{option.title}</span>
					</label>
				)
			}
		</Main >
	);
}

const Main = styled.div`
	& label
	{
		margin-bottom:0px;

		:first-child span
		{
			border-radius:3px 0 0 3px
		}
		:last-child span
		{
			border-radius:0 3px 3px 0;
		}

		> input[type="radio"]
		{
			display:none;

			&:checked + span
			{
				background: #99a2a8;
				color:#ffffff;
				box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
				text-shadow:1px 1px 0 rgba(0, 0, 0, 0.3);
			}
		}

		> span
		{
			padding: 1rem 2rem;
			font-size: 14px;
			font-size: 0.875rem;
			cursor:pointer;
			display:inline-block;
			box-shadow: inset 0 1px 4px rgba(41, 41, 41, 0.15);
			text-shadow:1px 1px 0 #ffffff;
		}
	}
`;

export default ToggleButtons;
