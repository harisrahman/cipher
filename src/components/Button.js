import React from 'react';
import styled from 'styled-components';

function Button(props)
{
	return (
		<Main ref={props.fref} type={props.type || "button"} {...props}>
			{props.children}
		</Main>
	);
}

const Main = styled.button`
	display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: ${props => props.p || ".5rem 1.5rem"};
    font-size: ${props => props.font || "1rem"};
    line-height: 1.5;
    border-radius: .25rem;
	background-color: #000;
	color: #fff;
	cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

	&:active
	{
		background-color: #0062cc;
		border-color: #005cbf;
	}
`;

export default Button;
