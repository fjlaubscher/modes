import styled from 'styled-components';
import { breakpoints } from 'styles';

export const ControlsSection = styled.div`
  display: flex;
  flex-direction: column;

  > div,
  button {
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.small}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
