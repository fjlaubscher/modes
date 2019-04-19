import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Select from 'react-select';
import { Container, StyledLabel } from 'components/input/style';

export const StyledSelect = styled(Select)`
  display: block;
  z-index: 2;
  flex-grow: 1;
`;

const Dropdown = ({ className, label, options, onChange }) => (
  <Container className={className}>
    <StyledLabel>{label}</StyledLabel>
    <StyledSelect
      isSearchable={false}
      options={options}
      defaultValue={options[0]}
      onChange={onChange}
    />
  </Container>
);

Dropdown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Dropdown;
