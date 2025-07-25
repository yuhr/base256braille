const toBase256braille = (bytes: Uint8Array): string =>
	String.fromCodePoint(...[...bytes].map((byte) => byte + 0x2800))

export default toBase256braille