import 'mocha';
import { assert } from 'chai';

import { IPAFromAlphabet, IPAFromSyllabary, IPAFromAbugida } from '../src/index';
import npmPackage from '../src/index';

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a IPAFromAlphabet property', () => {
    assert.property(npmPackage, 'IPAFromAlphabet');
  });

  it('should have a IPAFromSyllabary property', () => {
    assert.property(npmPackage, 'IPAFromSyllabary');
  });

  it('should have a IPAFromAbugida property', () => {
    assert.property(npmPackage, 'IPAFromAbugida');
  });
});

describe('IPAFromAlphabet Function', () => {	
  it('should be a function', () => {	
    assert.isFunction(IPAFromAlphabet);	
  });	

  it('should return the correct IPA', () => {
    const expected = 'basu';
    const actual = IPAFromAlphabet("βασυ", [["β", "b"], ["α", "a"], ["σ", "s"], ["υ", "u"]]);
    assert.equal(actual, expected);
  });
});

describe('IPAFromSyllabary Function', () => {
  it('should be a function', () => {
    assert.isFunction(IPAFromSyllabary);
  });

  it('should return the correct IPA', () => {
    const expected = 'ɸɯtatsɯ';
    const actual = IPAFromSyllabary("かざん", [["か", "ɸɯ"], ["ざ", "ta"], ["ん", "tsɯ"], ["υ", "u"]]);
    assert.equal(actual, expected);
  });
});

describe('IPAFromAbugida Function', () => {
  it('should be a function', () => {
    assert.isFunction(IPAFromAbugida);
  });

  it('should return the correct IPA', () => {
    const expected = 'kase';
    const input = "กะเสะ"
    const consonantArray: Array<[string, string]> = [["ก", "k"], ["ส", "s"]];
    const vowelArray: Array<[string, string]> = [["5ะ", "a"], ["เ5ะ", "e"]];
    const placeholder = "5"
    const actual = IPAFromAbugida(input, consonantArray, vowelArray, placeholder);
    assert.equal(actual, expected);
  });

  it('should return the correct IPA with diacrits', () => {
    const expected = 'kuga';
    const input = "कुगा"
    const consonantArray: Array<[string, string]> = [["क", "k"], ["ग", "g"]];
    const vowelArray: Array<[string, string]> = [["5ा", "a"], ["5ु", "u"]];
    const placeholder = "5"
    const actual = IPAFromAbugida(input, consonantArray, vowelArray, placeholder);
    assert.equal(actual, expected);
  });

  it('should return the correct IPA only consonants', () => {
    const expected = 'kg';
    const input = "कग"
    const consonantArray: Array<[string, string]> = [["क", "k"], ["ग", "g"]];
    const vowelArray: Array<[string, string]> = [["5ा", "a"], ["5ु", "u"]];
    const placeholder = "5"
    const actual = IPAFromAbugida(input, consonantArray, vowelArray, placeholder);
    assert.equal(actual, expected);
  });
});
