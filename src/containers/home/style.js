import styled from 'styled-components';
import { breakpoints } from 'styles';

export const ControlsSection = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.small}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
