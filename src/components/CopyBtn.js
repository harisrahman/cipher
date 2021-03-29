import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from "./Button";

function CopyBtn(props)
{
	const copyBtn = useRef(null);

	function doCopy()
	{
		var inp = document.createElement('input');
		document.body.appendChild(inp);
		inp.value = props.text;
		inp.select();
		document.execCommand('copy', false);
		inp.remove();
		copyBtn.current.focus();
	}

	return (
		<Copy fref={copyBtn} onClick={doCopy} type="button" data-poptip={props.tip || "Copied!"} p="0.1rem 0.3rem" font="0.8rem" style={{ ...props.style }}>Copy</Copy>
	);
}

const Copy = styled(Button)`
	&[data-poptip]
	{
		position: relative;
		z-index: 2;
		cursor: pointer;
	}

	&[data-poptip]:before,
	&[data-poptip]:after
	{
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	&[data-poptip]:before
	{
		position: absolute;
		top: -30px;
		left: calc(50% + 15px);
		margin-left: -50px;
		padding: 2px 10px;
		border-radius: 3px;
		background-color: #000;
		background-color: hsla(0, 0%, 20%, 0.85);
		color: #fff;
		content: attr(data-poptip);
		text-align: center;
		font-size: 14px;
	}

	&[data-poptip]:after
	{
		position: absolute;
		top: -6px;
		left: 50%;
		margin-left: -5px;
		width: 0;
		border-top: 5px solid #000;
		border-top: 5px solid hsla(0, 0%, 20%, 0.9);
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		content: " ";
		font-size: 0;
		line-height: 0;
	}

	&[data-poptip]:focus:before,
	&[data-poptip]:focus:after
	{
		visibility: visible;
		opacity: 1;
		animation: hideAnimation 0.2s ease-in 2s forwards;
		animation-fill-mode: forwards;
	}

	@keyframes hideAnimation
	{
		to {
			visibility:hidden;
			overflow:hidden;
			border: none;
		}
	}
	@-webkit-keyframes hideAnimation
	{
		to {
			visibility:hidden;
			overflow:hidden;
			border: none;
		}
	}

`;


export default CopyBtn;
