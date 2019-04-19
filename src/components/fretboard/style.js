import styled from 'styled-components';
import { breakpoints, colors } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  display: grid;
  grid-column-gap: 0.2rem;
  grid-template-columns: repeat(auto-fill, 0.75rem);
  align-items: center;
  justify-content: start;
  padding: 0 0.5rem;
  position: relative;
  font-size: 0.75rem;

  :before {
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${colors.black};
  }

  @media (min-width: ${breakpoints.xs}px) {
    grid-column-gap: 0.35rem;
  }

  @media (min-width: ${breakpoints.small}px) {
    grid-column-gap: 0.5rem;
    font-size: 1rem;
    grid-template-columns: repeat(auto-fill, 1rem);
  }
`;

export const Note = styled.div`
  grid-column-start: ${({ column }) => column || 1};
  grid-column-end: ${({ column }) => (column && column + 1) || 2};
  z-index: 1;
  text-align: center;
  background-color: ${colors.white};
  color: ${({ active }) => (active && colors.dodgerBlue) || colors.black};
`;
