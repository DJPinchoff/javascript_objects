function repeatedCharacters(string) {
  var allCountedChars = {};
  var selectCountedChars = {};
  var allChars = string.toLowerCase().split("");
  var allCountedCharsKeys;

  for (i = 0; i < allChars.length; i++) {
    if (Object.keys(allCountedChars).includes(allChars[i])) {
      allCountedChars[allChars[i]] += 1;
    } else {
      allCountedChars[allChars[i]] = 1;
    }
  }

  allCountedCharsKeys = Object.keys(allCountedChars);

  for (i = 0; i < allCountedCharsKeys.length; i++) {
    if (allCountedChars[allCountedCharsKeys[i]] > 1 ) {
      selectCountedChars[allCountedCharsKeys[i]] = allCountedChars[allCountedCharsKeys[i]]
    }
  }

  console.log(selectCountedChars);
}


repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
