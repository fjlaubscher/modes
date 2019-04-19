import React from 'react';
import GitHubButton from 'react-github-btn';

import { StyledNav, HomeButtonSection, AppIcon, Heading } from './style';

const Nav = () => (
  <StyledNav>
    <HomeButtonSection>
      <AppIcon />
      <Heading to='/'>Modes</Heading>
    </HomeButtonSection>
    <GitHubButton
      href='https://github.com/fjlaubscher/modes'
      data-size='large'
      data-show-count='true'
      aria-label='Star fjlaubscher/modes on GitHub'
    >
      Star
    </GitHubButton>
  </StyledNav>
);

export default Nav;
