# IPA Converter

This npm package contains functions to covert strings to IPA, based on an input script dictionary. The main use for this package is in conlanging software, where the user can make their own script and convert their words to IPA. The package supports: alphabets, syllabaries and abugida's (and impure abjads with vowel diacritics using the abugida system).

## Installation

```bash
npm install @thecuddlybear/ipaconverter
```

## Usage
  
```javascript
import { IPAFromAlphabet, IPAFromSyllabary, IPAFromAbugida } from '@thecuddlybear/ipaconverter';

// Converting an own-defined alphabet to ipa
const alphabet = [["α", "a"], ["β", "b"], ["γ", "g"], ["δ", "d"], ["ε", "e"], ["ζ", "z"], ["η", "h"], ["θ", "θ"], ["ι", "i"], ["κ", "k"], ["λ", "l"], ["μ", "m"], ["ν", "n"], ["ξ", "x"], ["ο", "o"], ["π", "p"], ["ρ", "r"], ["σ", "s"], ["τ", "t"], ["υ", "u"], ["φ", "f"], ["χ", "χ"], ["ψ", "ψ"], ["ω", "o"]];

var ipaAlphabet = IPAFromAlphabet("βετα χι", alphabet); // Returns beta χi

// Converting an own-defined syllabary to ipa, works on the same principle as the alphabet.
const syllabary = [["か", "ka"], ["け", "ke"], ["き", "ki"], ["こ", "ko"], ["く", "ku"], ["さ", "sa"], ["せ", "se"], ["し", "shi"], ["そ", "so"], ["す", "su"], ["た", "ta"], ["て", "te"], ["ち", "chi"], ["と", "to"], ["つ", "tsu"], ["な", "na"], ["ね", "ne"], ["に", "ni"], ["の", "no"], ["ぬ", "nu"], ["は", "ha"], ["へ", "he"], ["ひ", "hi"], ["ほ", "ho"], ["ふ", "fu"], ["ま", "ma"], ["め", "me"], ["み", "mi"], ["も", "mo"], ["む", "mu"], ["や", "ya"], ["よ", "yo"], ["ゆ", "yu"], ["ら", "ra"], ["れ", "re"], ["り", "ri"], ["ろ", "ro"], ["る", "ru"], ["わ", "wa"], ["を", "wo"], ["ん", "n"]];

const ipaSyllabary = IPAFromSyllabary("かへに", syllabary); // Returns kehi

// Converting an own-defined abugida to ipa, this works a little bit different, as it requires the vowels to be specified separately from the consonant with a placeholder.
// The placeholder CANNOT contain any regex characters, it is wise to use characters like ∈
const placeholder = "∈"
const vowelArray = [["∈ा", "a"], ["∈ि", "i"], ["∈ी", "i"], ["∈ु", "u"], ["∈ू", "u"], ["∈े", "e"], ["∈ै", "ai"], ["∈ो", "o"], ["∈ौ", "au"], ["∈ं", "am"], ["∈ः", "ah"], ["∈ँ", "an"]];
const consonantArray = [["क​", "k"], ["ख​", "kh"], ["ग​", "g"], ["घ​", "gh"], ["ङ​", "ṅ"], ["च​", "c"], ["छ​", "ch"], ["ज​", "j"], ["झ​", "jh"], ["ञ​", "ñ"], ["ट​", "ṭ"], ["ठ​", "ṭh"], ["ड​", "ḍ"], ["ढ​", "ḍh"], ["ण​", "ṇ"], ["त​", "t"], ["थ​", "th"], ["द​", "d"], ["ध​", "dh"], ["न​", "n"], ["प​", "p"], ["फ​", "ph"], ["ब​", "b"], ["भ​", "bh"], ["म​", "m"], ["य​", "y"], ["र​", "r"], ["ल​", "l"], ["व​", "v"], ["श​", "ś"], ["ष​", "ṣ"], ["स​", "s"], ["ह​", "h"], ["क्ष​", "kṣ"], ["त्र​", "tr"], ["ज्ञ​", "jñ"]];

const ipaAbugida = IPAFromAbugida("कालि", consonantArray, vowelArray, placeholder); // Returns kali
```

## Get Started with development

1. Run `npm install` in your terminal
1. Then run `npm run build`
1. Update the `package.json` file "name" field with your own package name. Example `@username/package-name`
1. Create an account with [npm](https://www.npmjs.com/signup) if you don't have one already. Also be sure to enable [two-factor authentication](https://docs.npmjs.com/configuring-two-factor-authentication)
1. Sign in to your npm account in your terminal with `npm login`
1. Run `npm publish --access=public` to publish your package

### Testing

1. Install developer dependencies using the following command in your terminal `npm i -D mocha @type/mocha chai @types/chai ts-node`
1. Create a new file `.mocharc.json` in the root directory with the following contents:
   ```json
   {
     "extension": ["ts"],
     "spec": "./**/*.spec.ts",
     "require": "ts-node/register"
   }
   ```
1. Create a `tests` folder
1. Create an `index.spec.ts` file in the `tests` folder
1. Write unit tests in the `index.spec.ts` file to test the code in `index.ts`
1. Add a `"test"` property in the `package.json` file and give it a value of `"mocha"`
1. Run `npm test` in your terminal from the root folder of the project
