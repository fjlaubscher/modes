import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';

// helpers
import { convertNotes } from './notes';

// components
import { StyledButton } from './style';
import { ReactComponent as PlayIcon } from 'assets/play.svg';
import { ReactComponent as StopIcon } from 'assets/stop.svg';

// set up synth
const synth = new Tone.Synth({
  envelope: { attack: 0, sustain: 0.5, release: 0.1 }
}).toMaster();

const Button = ({ tempo, notes }) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    // set tempo
    Tone.Transport.bpm.value = tempo;
    // create pattern / sequence of notes
    const pattern = new Tone.Pattern(
      (time, note) => {
        console.log(note);
        synth.triggerAttackRelease(note, time);
      },
      convertNotes(notes),
      'up'
    );
    pattern.start(0);

    if (play) {
      synth.volume.value = 0;
      Tone.Transport.start();
    } else {
      synth.volume.value = -50;
      Tone.Transport.stop();
    }
  });

  return (
    <StyledButton onClick={() => setPlay(!play)}>
      {(!play && <PlayIcon />) || <StopIcon />}
    </StyledButton>
  );
};

Button.propTypes = {
  tempo: PropTypes.number.isRequired,
  notes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

export default Button;
