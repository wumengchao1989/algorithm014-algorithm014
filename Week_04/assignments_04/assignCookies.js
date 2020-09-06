var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0, j = 0; i < g.length && j < s.length; ) {
    if (g[i] <= s[j]) {
      res++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return res;
};
