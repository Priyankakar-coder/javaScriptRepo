function checkNumber(number) {
	if (number > 0) {
		return "positive";
	} else if (number < 0) {
		return "negative";
	}
	return "neutral";
}

const numberToCheck = 5;
console.log(checkNumber(numberToCheck));
