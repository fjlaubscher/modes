import styled from 'styled-components';
import Link from 'react-router-dom/Link';
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

export const Heading = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${colors.white};
  font-size: 1.5rem;
`;
