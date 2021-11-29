// This function Time is O(n^2) and Space O(1) =================================
function SumZero(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    const num1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const num2 = array[j];
      if (num1 + num2 === target) {
        return true;
      }
    }
  }
  return false;
}
let numar = [1, 2, 3, -2];
console.log(SumZero(numar, 0));

// This function Time is O(n^2) and space is O(n) ==================================
function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(hasUniqueChars("monday"));

// This function Time is O(n) and Space is O(n)======================
function isPangram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let lowercase = str.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// This function Time is O(n) and Space is O(n)  ==========================
function findLongestWord(arr) {
  var max = arr[0].length;
  arr.map((v) => (max = Math.max(max, v.length)));
  word = arr.filter((v) => v.length == max);
  chars = word[0];
  result = chars.length;
  return result;
}

console.log(findLongestWord(["hi", "hello", "Welcome"]));
