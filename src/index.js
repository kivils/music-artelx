// JS Goes here - ES6 supported

import "./css/main.css";

const renderChords = () => {
  const chords = require("./js/chords");
  const element = document.getElementsByClassName("chords")[0];

  if(element) {
    const children = [...element.children]
    children.map(item => {
      const className = item.classList[0];
      const chordsFromBase = chords.chords.filter(chord => chord.name.toLowerCase() === className);
      const selectedChord = chordsFromBase[0];
      const svg = new ChordySvg({ name: selectedChord.name, shape: selectedChord.shape, root: selectedChord.root, comment: selectedChord.comment }, { target: item });
    })
  }

}

renderChords();

