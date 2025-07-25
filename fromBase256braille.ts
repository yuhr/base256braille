const fromBase256braille = (string: string): Uint8Array<ArrayBuffer> =>
	Uint8Array.from(string, (char) => char.codePointAt(0)! - 0x2800)

export default fromBase256braille