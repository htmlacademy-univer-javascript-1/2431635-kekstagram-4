const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('asdfghjkl', 10);

function isPalindrome (inputString) {
  const str = inputString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome('Лёша на полке клопа нашёл');
