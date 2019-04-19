import styled from 'styled-components';
import { breakpoints, colors } from 'styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.small}px) {
    max-width: 300px;
  }
`;

export const StyledLabel = styled.label`
  white-space: nowrap;
  margin-right: 0.5rem;
  width: 100px;

  @media (min-width: ${breakpoints.small}px) {
    min-width: unset;
  }
`;

export const StyledInput = styled.input`
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  min-height: 38px;
  padding: 2px 8px;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  display: block;
  flex-grow: 1;

  :focus {
    border-color: ${colors.dodgerBlue};
  }
`;
