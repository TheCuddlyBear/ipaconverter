import { IPAFromAbugida } from ".";

const expected = 'kuga';
const input = "कुगा"
const consonantArray: Array<[string, string]> = [["क", "k"], ["ग", "g"]];
const vowelArray: Array<[string, string]> = [["5ा", "a"], ["5ु", "u"]];
const placeholder = "5"
const actual = IPAFromAbugida(input, consonantArray, vowelArray, placeholder);
console.log(actual);