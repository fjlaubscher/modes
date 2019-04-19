import React from 'react';
import PropTypes from 'prop-types';

// components
import { StyledButton } from './style';
import { ReactComponent as PlayIcon } from 'assets/play.svg';
import { ReactComponent as StopIcon } from 'assets/stop.svg';

const PlayButton = ({ onClick, play }) => (
  <StyledButton onClick={onClick}>
    {(!play && <PlayIcon />) || <StopIcon />}
  </StyledButton>
);

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  play: PropTypes.bool.isRequired
};

export default PlayButton;
