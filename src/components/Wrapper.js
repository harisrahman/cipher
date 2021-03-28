import React from 'react';
import styled from 'styled-components';

function Wrapper(props)
{
	return (
		<Main {...props}>
			{props.children}
		</Main>
	);
}

const Main = styled.div`
	text-align: ${props => props.center ? "center" : undefined};
	margin-top: ${props => props.mt};
	margin-bottom: ${props => props.mb};
	margin-right: ${props => props.mr};
	margin-left: ${props => props.ml};
	width: ${props => props.full ? "100vw" : undefined};
	height: ${props => props.full ? "100vh" : undefined};
`;

export default Wrapper;
