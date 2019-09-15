import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import './index.css';

const Frame = ({ children }) => (

  <ThemeProvider theme={theme}>
    <FrameWrapper>
      {children}
    </FrameWrapper>
  </ThemeProvider>
);

Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Frame;

const FrameWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: ${(p) => p.theme.textColors};
  background: ${(p) => p.theme.backgroundColor};
`;
