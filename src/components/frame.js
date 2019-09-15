import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './index.css';

const Frame = ({ children }) => (
  <FrameWrapper>
    {children}
  </FrameWrapper>
);

Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Frame;

const FrameWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: #2b2525;
  background: #f9f8f4;
`;
