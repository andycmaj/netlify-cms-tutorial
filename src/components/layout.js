import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Link } from 'gatsby';

const pageColor = '#067ada';
const accentColor = '#222';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  ::-moz-selection {
    background-color: ${accentColor};
    color: ${pageColor};
  }
  ::selection {
    background-color: ${accentColor};
    color: ${pageColor};
  }

  html {
    background-color: ${accentColor};
  }

  body {
    background-color: ${pageColor};
    color: rgba(255, 255, 255, 0.8);
    font-family: sans-serif;
    font-weight: 30;
    font-size: 16px;
    line-height: 1.8;
  }
`;

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 122, 218, 1);
`;

const StyledLink = styled(Link)`
  :link,
  :visited {
    display: inline-block;
    border-top: solid 1px rgba(255, 255, 255, 0.6);
    border-bottom-style: none;
    padding-top: 0.8em;
    padding-bottom: 2em;
    margin-left: 0;
    margin-right: 0.7em;
    width: 8em;
    text-align: left;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
  :hover,
  :focus {
    border-top: solid 1px ${accentColor};
    border-bottom-style: none;
  }
`;

const Header = styled.header`
  padding-top: 3em;
  /* text-align: center; */
`;

const Nav = styled.ul`
  margin-bottom: 0;
  li {
    display: inline;
  }
`;

export default ({ children }) => (
  <React.Fragment>
    <Header>
      <Nav>
        <li>
          <StyledLink to="/">home</StyledLink>
        </li>
        <li>
          <StyledLink to="/guide/principles">Principles</StyledLink>
        </li>
        <li>
          <StyledLink to="/guide/philosophies">Philosophies</StyledLink>
        </li>
        <li>
          <StyledLink to="/guide/techdebt">Tech Debt</StyledLink>
        </li>
        <li>
          <StyledLink to="/guide/faq">F.A.Q.</StyledLink>
        </li>
      </Nav>
      <h1>Scalable Agile</h1>
    </Header>
    <Container>
      <div>{children}</div>
    </Container>
    <GlobalStyle />
  </React.Fragment>
);
