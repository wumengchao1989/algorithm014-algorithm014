var ladderLength = function (beginWord, endWord, wordList) {
  let wordListMap = {},
    len = beginWord.length;
  for (let word of wordList) {
    wordListMap[word] = [];
    for (let i = 0; i < word.length; i++) {
      wordListMap[word].push(
        word.substring(0, i) + "*" + word.substring(i + 1, len)
      );
    }
  }
  let beginNode = {};
  beginNode[beginWord] = 1;
  let queue = [beginNode],
    visited = new Set();
  while (queue.length > 0) {
    let wordNode = queue.shift();
    let word = Object.keys(wordNode)[0];
    let level = wordNode[word];
    for (let i = 0; i < word.length; i++) {
      let temp = word.substring(0, i) + "*" + word.substring(i + 1, len);
      for (let key in wordListMap) {
        if (wordListMap[key].indexOf(temp) !== -1 && !visited.has(key)) {
          if (key === endWord) return level + 1;
          let node = {};
          node[key] = level + 1;
          queue.push(node);
          visited.add(key);
        }
      }
    }
  }
  return 0;
};
