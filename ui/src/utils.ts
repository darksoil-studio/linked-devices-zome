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
export const MOBILE_WIDTH_PX = 600;

export function isTauriEnv() {
	// eslint-disable-next-line
	return !!(window as any).__TAURI_INTERNALS__;
}

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
