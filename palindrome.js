function reverseString(input) {
	const characters = input.split("");
	let reversed = "";

	for (let i = characters.length - 1; i >= 0; i--) {
		reversed += characters[i];
	}

	console.log(reversed);
	return reversed;
}

function isPalindrome(input) {
	const reversed = reverseString(input);
	return input === reversed;
}
const input = "madam";
console.log(`Input: "${input}"`);
console.log(`Is palindrome? ${isPalindrome(input)}`);