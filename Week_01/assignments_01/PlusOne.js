var plusOne = function (digits) {
  let right = digits.length - 1;
  let carry = 1;
  for (let i = right; i >= 0; i--) {
    digits[i] += carry;
    if (digits[i] === 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};
