import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import CarsList from './components/CarsList';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`
const Header = styled.div`
  position: sticky;
  top: 0;
  background: white;
  padding: 12px 20px;
  border-bottom: 1px solid #e2e2e2;
  z-index: 10;
`;

const Logo = styled.img`
  display: block;
  margin: auto;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Header>
      <Logo src="https://d2y2masl4rtrav.cloudfront.net/packs/images/shared/drivy-by-ga-logo-9eaed4df8ac81b13add18d2d06aa2272.svg" alt="Drivy" />
    </Header>
    <CarsList />
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);