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
  color: #1c1c1c;
`;
