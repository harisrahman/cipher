import React from 'react';
import styled from 'styled-components';

function Card(props)
{
	return (
		<Main {...props}>
			{props.children}
		</Main>
	);
}

const Main = styled.div`
	border: 0;
    border-radius: 6px;
    color: #333;
    background: #fff;
    width: 100%;
	padding: 2em;
	margin: 2em;
    box-shadow: 0 0 20px 0 rgb(62 28 131 / 10%);
	max-width: ${props => props.maxWidth};
`;

export default Card;
