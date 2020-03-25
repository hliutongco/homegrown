function importAll(result) {
  let chapters = {};
  result.keys().map((item, index) => chapters[item.replace('./', '')] = result(item));
  return chapters;
}

const chapters = importAll(require.context('./jack', false, /\.js/));

const jackTableOfContents = {
  1: chapters['ch_1.js'],
  2: chapters['ch_2.js'],
  3: chapters['ch_3.js'],
  4: chapters['ch_4.js']
};

export {jackTableOfContents};