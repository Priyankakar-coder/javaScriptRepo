function lengthOfLastWord(s) {
	const words = s.trim().split(/\s+/);
	return words[words.length - 1].length;
}

function isAnagram(first, second) {
	const normalize = (value) =>
		value.toLowerCase().replace(/\s/g, '').split('').sort().join('');
	return normalize(first) === normalize(second);
}
const s = "Hello World";
console.log(`Input: s = "${s}"`);
console.log(`Output: ${lengthOfLastWord(s)}`);
console.log(isAnagram("listen", "silent")); // true