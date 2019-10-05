import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Title from './title';

const PageHeader = ({ title }) => (
  <Header>
    <Title>{title}</Title>
  </Header>
);

PageHeader.propTypes = {
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  title: '',
};

export default PageHeader;


const Header = styled.header`
  width: 100%;
  grid-area: header;
  padding: 32px;
`;
