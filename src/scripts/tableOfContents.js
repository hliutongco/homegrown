function importAll(result) {
  let chapters = {};
  result.keys().map((item, index) => chapters[item.replace('./', '')] = result(item));
  return chapters;
}

const chapters = importAll(require.context('./jack', false, /\.js/));

const jackTableOfContents = [
  chapters['ch_1.js'],
  chapters['ch_2.js'],
  chapters['ch_3.js'],
  chapters['ch_4.js']
];

const jackChapterTitles = [
  "ReBoot",
  "ReImage",
  "RePosition",
  "ReWind"
]

export {jackTableOfContents, jackChapterTitles};