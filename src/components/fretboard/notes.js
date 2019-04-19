const chromaticScale = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B'
];

const tuning = [
  { note: 'E', pitch: 2 },
  { note: 'A', pitch: 2 },
  { note: 'D', pitch: 3 },
  { note: 'G', pitch: 3 },
  { note: 'B', pitch: 3 },
  { note: 'E', pitch: 4 }
];

const convertToNote = (string, index) => {
  const baseNoteIndex = chromaticScale.indexOf(tuning[string].note);
  const basePitch = tuning[string].pitch;
  const noteIndex = baseNoteIndex + index;

  // convert from index here and find it on the chromatic scale
  // then check if the pitch would've changed (12 frets or more)
  const pitchDifference = noteIndex / 12;
  const pitch = pitchDifference >= 1 ? Math.floor(pitchDifference) : 0;
  let note = noteIndex;
  while (note >= 12) note -= 12;

  return `${chromaticScale[note]}${basePitch + pitch}`;
};

export const convertNotes = notes => {
  const notesToPlay = notes.map((line, index) =>
    line.map(note => convertToNote(index, note))
  );
  const mergedNotes = [].concat.apply([], notesToPlay);
  return mergedNotes;
};
