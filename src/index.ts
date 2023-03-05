export function IPAFromAlphabet(input: string, comboArray: Array<[string, string]>): string{
  var IPA: string = "";
  var stringArray: Array<string> = input.split("");
  stringArray.forEach((letter: string) => {
    comboArray.forEach((combo: [string, string]) => {
      if (letter == combo[0]) {
        IPA += combo[1];
      }
    });
  })
  return IPA;
}

export function IPAFromSyllabary(input: string, comboArray: Array<[string, string]>): string{
  var ipa: string = "";
  var stringArray: Array<string> = input.split("");
  stringArray.forEach((letter: string) => {
    comboArray.forEach((combo: [string, string]) => {
      if (letter == combo[0]) {
        ipa += combo[1];
      }
    });
  })
  return ipa;
}

export function IPAFromAbugida(input: string, consonantArray: Array<[string, string]>, vowelArray: Array<[string, string]>, placeholder: string): string {
  var ipa: string = "";
  var comboArray: Array<[string, string]> = [];
  var regexStr: string = "(";
  var regex: RegExp;
  var length: number = consonantArray.length * vowelArray.length + consonantArray.length;
  var index: number = 0;

  consonantArray.forEach((consonant: [string, string]) => {
    vowelArray.forEach((vowel: [string, string]) => {
      var vow: string = vowel[0].replace(new RegExp(placeholder), consonant[0]);
      comboArray.push([vow, consonant[1] + vowel[1]]);
    });
    comboArray.push([consonant[0], consonant[1]]);
  }
  );

  comboArray.forEach((combo: [string, string]) => {
    if(index < length - 1){
      regexStr += combo[0] + "|";
      index++;
    }else{
      regexStr += combo[0] + ")?";
    }
  });
  regex = new RegExp(regexStr, "gm");
  var matches = input.match(regex);
  if(matches != null){
    var filtered = matches.filter(function (el) {
      return el != null && el != "";
    });
    filtered.forEach((match: string) => {
      comboArray.forEach((combo: [string, string]) => {
        if(match == combo[0]){
          ipa += combo[1];
        }
      });
    });
  }
  return ipa;
}

export default {
  IPAFromAlphabet,
  IPAFromSyllabary,
  IPAFromAbugida
};
