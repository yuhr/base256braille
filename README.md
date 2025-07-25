# base256braille

Tiny TypeScript modules that can encode/decode between bytes and Braille characters (`U+2800`–`U+28FF`). Each module is only 4 lines of code, as it just offsets each byte by `0x2800`.

## Usage

```typescript
import { assertEquals } from "https://esm.sh/jsr/@std/assert"
import toBase256braille from "https://deno.land/x/base256braille/toBase256braille.ts"
import fromBase256braille from "https://deno.land/x/base256braille/fromBase256braille.ts"

assertEquals(toBase256braille(Uint8Array.of(0, 1, 2, 3)), "⠀⠁⠂⠃")
assertEquals(fromBase256braille("⠀⠁⠂⠃"), Uint8Array.of(0, 1, 2, 3))
```

## Caveats

The null byte (`0x00`) is encoded as the invisible braille character `⠀`, so it is highly recommended that a presenter appropriately delimit and markup for readers to easily recognize which parts of text are in the Base 256 Braille encoding.