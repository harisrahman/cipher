import React from 'react';
import styled from 'styled-components';

function Textarea(props)
{
	return (
		<Main {...props}>
			{props.children}
		</Main>
	);
}

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
