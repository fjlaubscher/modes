import styled from 'styled-components';
import { breakpoints, colors } from 'styles';

export const StyledButton = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  padding: 1rem;
  background-color: ${colors.gallery};
  outline: none;

  svg {
    height: 32px;
  }

  @media (min-width: ${breakpoints.small}px) {
    padding: 0;
    background-color: ${colors.white};
  }
`;
