import React from 'react';
import PropTypes from 'prop-types';

import { Container, StyledLabel, StyledInput } from './style';

const Input = ({ className, label, ...rest }) => (
  <Container>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput {...rest} />
  </Container>
);

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Input;
