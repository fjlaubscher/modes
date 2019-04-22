import modes from './modes';

export const generateOptions = () =>
  Object.keys(modes).map(mode => {
    const modeName = mode;
    const label = modeName.charAt(0).toUpperCase() + modeName.slice(1);
    return {
      label,
      value: mode
    };
  });

export const generateNotes = fret => {
  // generate ionian
  // generate next mode using second note in ionian 0
  // generate next using second note in dorian (1)
  // etc
  const modeKeys = Object.keys(modes);
  const tabs = {};

  for (let index = 0; index < modeKeys.length; index++) {
    const modeName = modeKeys[index];
    let modifier = fret;

    if (index > 0) {
      const previousMode = modeKeys[index - 1];
      // grab the second note of the previous mode
      modifier = tabs[previousMode][0][1];
    }

    const baseMode = [...modes[modeName]].reverse();
    tabs[modeName] = baseMode.map(line => line.map(note => modifier + note));
  }

  return tabs;
};
