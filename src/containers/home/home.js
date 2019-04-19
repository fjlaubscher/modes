import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// components
import Dropdown from 'components/dropdown';
import Fretboard from 'components/fretboard';
import Input from 'components/input';
import ToneButton from 'components/tone-button';
import { ControlsSection } from './style';

import modes from './modes';

const DEFAULT_FRET = 3;
const DEFAULT_MODE = 'ionian';
const DEFAULT_TEMPO = 120;

const generateNotes = (fret, mode) => {
  const startingFret = (fret >= 0 && fret <= 24 && fret) || 0;
  // create new array with those values
  const baseMode = [...modes[mode]].reverse();
  return baseMode.map(line => line.map(note => startingFret + note));
};

const generateOptions = () =>
  Object.keys(modes).map(mode => {
    const modeName = mode;
    const label = modeName.charAt(0).toUpperCase() + modeName.slice(1);
    return {
      label,
      value: mode
    };
  });

const modeOptions = generateOptions(modes);

const Home = () => {
  const [fret, setFret] = useState(DEFAULT_FRET);
  const [mode, setMode] = useState(DEFAULT_MODE);
  const [tempo, setTempo] = useState(DEFAULT_TEMPO);
  const notes = generateNotes(fret, mode);

  return (
    <div>
      <Helmet title='Modes' />
      <ControlsSection>
        <ToneButton tempo={tempo} notes={notes} />
        <Input
          label='Tempo'
          type='number'
          min='0'
          defaultValue={DEFAULT_TEMPO}
          onChange={evt =>
            evt.target.value && setTempo(parseInt(evt.target.value))
          }
        />
      </ControlsSection>
      <ControlsSection>
        <Input
          label='Starting fret'
          type='number'
          min='0'
          max='24'
          defaultValue={DEFAULT_FRET}
          onChange={evt =>
            evt.target.value && setFret(parseInt(evt.target.value))
          }
        />
        <Dropdown
          label='Select a mode'
          options={modeOptions}
          onChange={selected => setMode(selected.value)}
        />
      </ControlsSection>
      <Fretboard notes={notes} />
    </div>
  );
};

export default Home;
