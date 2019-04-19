import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone, { Synth, Pattern, Transport, Draw } from 'tone';
import StartAudioContext from 'startaudiocontext';

// helpers
import { convertNotes } from './notes';

import { Container, Line, Note } from './style';

const getColumnPlacement = (row, column) => {
  // this assumes a row has 3 items
  return row * 3 + (column + 1);
};

// set up synth
const synth = new Synth({
  envelope: {
    attack: 0.05,
    decay: 0.2,
    sustain: 0.2,
    release: 1.5
  },
  portamento: 0.05
}).toMaster();

class Fretboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNote: 0
    };
  }

  activeNote = 0;
  loop = null;

  componentDidMount() {
    const { notes, tempo } = this.props;
    // ios tricky
    StartAudioContext(Tone.context).then(() => {
      this.loop.start(0);
    });

    const playableNotes = convertNotes(notes);
    Transport.bpm.value = tempo;

    this.loop = new Pattern(
      (time, note) => {
        synth.triggerAttackRelease(note, time);

        // request to draw
        Draw.schedule(() => {
          if (this.activeNote >= 18) this.activeNote = 0;
          this.setState({ activeNote: this.activeNote });
          this.activeNote++;
        }, time);
      },
      playableNotes,
      'up'
    );
  }

  componentDidUpdate(prevProps) {
    const { play, tempo, notes } = this.props;

    if (prevProps.tempo !== tempo) {
      console.log('tempo changed');
      Transport.bpm.value = tempo;
    }

    // weird approach -- seems like best way to compare arrays
    const notesChanged =
      JSON.stringify(prevProps.notes) !== JSON.stringify(notes);

    if (notesChanged) {
      console.log('notes changed');
      this.loop.values = convertNotes(notes);
    }

    if (prevProps.play !== play) {
      this.activeNote = 0;
      // react docs say this is fine https://reactjs.org/docs/react-component.html#componentdidupdate
      this.setState({ activeNote: 0 }); // eslint-disable-line
      if (play) this.start();
      else this.stop();
    }
  }

  stop() {
    this.loop.stop(0);
    this.loop.index = 0;
    Transport.stop();
    synth.volume.value = -50;
  }

  start() {
    this.loop.start(0);
    Transport.start();
    synth.volume.value = 0;
  }

  render() {
    const { notes, play } = this.props;
    const { activeNote } = this.state;
    return (
      <Container>
        {notes
          .map((line, rowIndex) => (
            <Line key={`${rowIndex}-string`}>
              {line.map((note, colIndex) => {
                const columnNumber = getColumnPlacement(rowIndex, colIndex);
                return (
                  <Note
                    key={`${note}-note`}
                    column={columnNumber}
                    active={play && activeNote === columnNumber - 1}
                  >
                    {note}
                  </Note>
                );
              })}
            </Line>
          ))
          .reverse()}
      </Container>
    );
  }
}
Fretboard.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  play: PropTypes.bool.isRequired,
  tempo: PropTypes.number.isRequired
};

export default Fretboard;
