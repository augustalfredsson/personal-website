import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../fonts/Inter-Regular.woff2';
import Frame from '../components/frame';
import SEO from '../components/seo';

const Home = () => (
  <Frame>
    <SEO title="Home" />
    <Grid>

      <Header>
        <Name>August Alfredsson</Name>
      </Header>
      <Description />
      <Description>Software developer in Malmö</Description>
    </Grid>
    <Link to="/page-2/" />
  </Frame>
);

export default Home;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 100px auto 100px;  

`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  grid-column-start: 1;
  grid-column-end:   4;
`;

const Description = styled.p`
  font-family: 'Inter Regular';
  font-weight: regular;
`;

const Name = styled.h1`
  font-family: 'Yrsa';
`;
