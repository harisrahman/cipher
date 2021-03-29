function random(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Crypt(text, encrypt)
{
	if (text.length < 1 || (text.length < 2 && encrypt === false)) return "";

	const key = encrypt ? random(33, 123) : text.charCodeAt(0);

	let result = text.split('').map((letter, index) =>
	{
		if (index == 0 && !encrypt) return "";

		const letter_code = letter.charCodeAt(0);

		const encrypted_code = encrypt ? (letter_code + key) : (letter_code - key);
		const encrypted_letter = String.fromCharCode(encrypted_code)

		return ((index == 0 && encrypt) ? String.fromCharCode(key) : "") + encrypted_letter;
	}).join('');

	console.log(result);

	// return text;
	return result;
}

export default Crypt;
