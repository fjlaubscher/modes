import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// components
import Dropdown from 'components/dropdown';
import Fretboard from 'components/fretboard';
import Input from 'components/input';
import ToneButton from 'components/tone-button';
import { ControlsSection } from './style';

// helpers
import { generateOptions, generateNotes } from './helpers';

const DEFAULT_FRET = 3;
const DEFAULT_MODE = 'ionian';
const DEFAULT_TEMPO = 120;

const modeOptions = generateOptions();

const Home = () => {
  const [fret, setFret] = useState(DEFAULT_FRET);
  const [mode, setMode] = useState(DEFAULT_MODE);
  const [tempo, setTempo] = useState(DEFAULT_TEMPO);
  const [play, setPlay] = useState(false);

  const notes = generateNotes(fret, mode);

  return (
    <div>
      <Helmet title='Modes' />
      <ControlsSection>
        <ToneButton play={play} onClick={() => setPlay(!play)} />
        <Input
          label='Tempo'
          type='number'
          min='0'
          defaultValue={DEFAULT_TEMPO}
          onChange={evt => {
            setPlay(false);
            evt.target.value && setTempo(parseInt(evt.target.value));
          }}
        />
      </ControlsSection>
      <ControlsSection>
        <Input
          label='Starting fret'
          type='number'
          min='0'
          max='24'
          defaultValue={DEFAULT_FRET}
          onChange={evt => {
            setPlay(false);
            evt.target.value && setFret(parseInt(evt.target.value));
          }}
        />
        <Dropdown
          label='Select a mode'
          options={modeOptions}
          onChange={selected => {
            setPlay(false);
            setMode(selected.value);
          }}
        />
      </ControlsSection>
      <Fretboard notes={notes} play={play} tempo={tempo} />
    </div>
  );
};

export default Home;
