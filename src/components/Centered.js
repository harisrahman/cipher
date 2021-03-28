import React from 'react';
import styled from 'styled-components';

function Centered(props)
{
	return (
		<Main {...props}>
			{props.children}
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	height: 100%;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
`;

export default Centered;
