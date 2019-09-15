import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../fonts/Inter-Regular.woff2';
import Frame from '../components/frame';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar';

const Home = () => (
  <Frame>
    <SEO title="August Alfredsson" />
    <Grid>

      <Header>
        <Name>August Alfredsson</Name>
      </Header>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Description>Software developer in Malmö</Description>
    </Grid>
    <Link to="/page-2/" />
  </Frame>
);

export default Home;

const Grid = styled.div`
 /* Grid styles */
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: min-content minmax(325px, 1fr) minmax(0, 1fr);
  grid-template-areas: 
        "header header header"
        "sidebar main annotations"
        "footer footer footer";
  align-items: start;
  grid-gap: 20px;
  justify-items: start;

  @media (max-width: 425px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: minmax(0, 425px);
    grid-template-areas: 
          "header"
          "sidebar"
          "main"
          "footer";
  }
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 20px 0 0 0;
  grid-area: header;
`;

const SidebarContainer = styled.div`
  margin: 0 0 0 20px;
  grid-area: sidebar;

  @media (max-width: 425px) {
    margin: 0 auto;
  }
`;

const Description = styled.p`
  font-family: 'Inter Regular';
  font-weight: normal;
  min-width: 375px;
  grid-area: main;
  margin: 0 20px;
`;

const Name = styled.h1`
  font-family: 'Crimson Pro';
  margin: 0;
`;
