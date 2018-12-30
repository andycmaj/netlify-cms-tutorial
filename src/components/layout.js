import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const pageColor = '#067ada';
const accentColor = '#222';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
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
    font-size: 18px;
    line-height: 1.8;
  }

  ul {
    margin-left: 1em;
  }

  h1,
  h2,
  h3 {
    color: #fff;
    font-weight: 600;
    margin: 1em 0;
    line-height: 1em;

    a {
      color: #fff;
    }
  }

  h4 {
    color: rgba(255, 255, 255, 0.9);
    margin: 1em 0;

    a {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const Container = styled.div`
  margin: auto;
  max-width: 85%;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 122, 218, 1);
  padding-bottom: 2em;
`;

const StyledLink = styled(Link)`
  :link,
  :visited {
    color: #fff;
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
  padding: 0;
  margin-top: 1em;
  /* text-align: center; */
`;

const Nav = styled.ul`
  margin-bottom: 0;
  margin-left: 0;
  li {
    display: inline;
  }
`;

const headerStyle = css`
  font-size: 5em;
  line-height: 0.9em;
  margin-bottom: 1em;
`;

export default ({ children }) => (
  <React.Fragment>
    <Container>
      <Header>
        <Nav>
          <li>
            <StyledLink to="/">Home</StyledLink>
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
      </Header>
      <h1 css={headerStyle}>Scalable Agile</h1>
      <div>{children}</div>
    </Container>
    <Global styles={globalStyles} />
  </React.Fragment>
);
