import styled from 'styled-components';
import { colors } from 'styles';
import { ReactComponent as AppIconSvg } from 'assets/guitar.svg';

export const StyledNav = styled.nav`
  display: flex;
  height: 60px;
  padding: 1rem;
  background-color: ${colors.black};
  color: ${colors.white};
  align-items: center;
  margin-bottom: 1rem;
`;

export const AppIcon = styled(AppIconSvg)`
  height: 100%;
  fill: currentColor;
`;

export const Heading = styled.h1`
  margin: 0 1rem;
  font-weight: normal;
`;
