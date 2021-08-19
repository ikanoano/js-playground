const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  const verse = verseChoose.value;
  updateDisplay(verse).catch(alert);
};

async function updateDisplay(verse) {
  // Local file can't be loaded by fetch().
  const base = 'https://raw.githubusercontent.com/mdn/learning-area/master/javascript/apis/fetching-data';
  const url = `${base}/${verse.replace(" ", "").toLowerCase()}.txt`; // 'Verse 1' -> '${base}/verse1.txt'
  let response = await fetch(url);
  poemDisplay.textContent = await response.text();
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';