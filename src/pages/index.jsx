import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../fonts/Inter-Regular.woff2';
import Frame from '../components/frame';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar';
import Grid from '../components/grid';
import PageHeader from '../components/pageHeader';

const Home = () => (
  <Frame>
    <SEO title="August Alfredsson" />
    <Grid>
      <PageHeader title="August Alfredsson" />
      <SidebarContainer>
        <Sidebar
          selectedItem="Home"
          items={[
            { title: 'Home', path: '/' },
            { title: 'Experiments', path: '/experiments' },
            { title: 'Blog', path: '/blog' },
          ]}
        />
      </SidebarContainer>
      <Description>Web developer in Malmö</Description>
    </Grid>
    <Link to="/page-2/" />
  </Frame>
);

export default Home;

const SidebarContainer = styled.div`
  margin: 0 0 0 20px;
  grid-area: sidebar;
  @media (max-width: ${(p) => p.theme.breakpoint.mobile}) {
    margin: 0 auto;
  }
`;

const Description = styled.p`
  font-family: 'Inter Regular';
  font-weight: normal;
  grid-area: main;
  margin: 0 20px;
`;
