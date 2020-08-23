var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let index in s) {
    if (!map[s[index]]) {
      map[s[index]] = 0;
      map[s[index]]++;
    } else {
      map[s[index]]++;
    }
    if (!map[t[index]]) {
      map[t[index]] = 0;
      map[t[index]]--;
    } else {
      map[t[index]]--;
    }
  }
  for (let num in map) {
    if (num !== 0) {
      return false;
    }
  }
  return true;
};
