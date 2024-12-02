function randomDigit(): number {
	return Math.floor(Math.random() * 10);
}

export function randomPasscode(length: number) {
	const passcode: number[] = [];

	for (let i = 0; i < length; i++) {
		passcode.push(randomDigit());
	}
	return passcode;
}
