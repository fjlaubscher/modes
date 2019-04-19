import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// svgs
import { ReactComponent as NotFoundSVG } from 'assets/404.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(NotFoundSVG)`
  display: block;
  height: 500px;
`;

const NotFound = () => (
  <div>
    <Helmet title='Modes - 404 Not Found!' />
    <Container>
      <h1>Oops! That shouldn&apos;t happen...</h1>
      <StyledIcon />
    </Container>
  </div>
);

export default NotFound;
