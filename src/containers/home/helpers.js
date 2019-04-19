import modes from './modes';

export const generateNotes = (fret, mode) => {
  const startingFret = (fret >= 0 && fret <= 24 && fret) || 0;
  // create new array with those values
  const baseMode = [...modes[mode]].reverse();
  return baseMode.map(line => line.map(note => startingFret + note));
};

export const generateOptions = () =>
  Object.keys(modes).map(mode => {
    const modeName = mode;
    const label = modeName.charAt(0).toUpperCase() + modeName.slice(1);
    return {
      label,
      value: mode
    };
  });
