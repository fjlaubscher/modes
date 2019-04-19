import React from 'react';
import PropTypes from 'prop-types';

import { Container, Line, Note } from './style';

const getColumnPlacement = (row, column) => {
  // this assumes a row has 3 items
  return row * 3 + (column + 1);
};

const Fretboard = ({ notes }) => {
  return (
    <Container>
      {notes
        .map((line, rowIndex) => (
          <Line key={`${rowIndex}-string`}>
            {line.map((note, colIndex) => (
              <Note
                key={`${note}-note`}
                column={getColumnPlacement(rowIndex, colIndex)}
              >
                {note}
              </Note>
            ))}
          </Line>
        ))
        .reverse()}
    </Container>
  );
};

Fretboard.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

export default Fretboard;
