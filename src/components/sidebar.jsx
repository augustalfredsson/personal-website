import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (

    <List>
      <Item>
        <ItemLabel selected={selected === 0} onClick={() => setSelected(0)}>
            Home
        </ItemLabel>
      </Item>
      <Item>
        <ItemLabel selected={selected === 1} onClick={() => setSelected(1)}>
            Experiments
        </ItemLabel>
      </Item>
      <Item>
        <ItemLabel selected={selected === 2} onClick={() => setSelected(2)}>
            Blog
        </ItemLabel>
      </Item>
    </List>
  );
};
Sidebar.propTypes = {

};
export default Sidebar;

const List = styled.ul`
  display: inline-flex;
  flex-flow: row wrap;
  margin: 0px;
  padding: 20px 10px 0px 10px;
  border-radius: 20px; 
  background: rgba(43, 37, 37, 0.05);
  list-style-type: none;
  list-style: none;
`;

const Item = styled.li`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  margin: 0 0 20px 0;
  &:hover {
    cursor: pointer;
  }
`;

const ItemLabel = styled.span`
  background: ${(p) => (p.selected ? 'rgba(255,255,255, 0.7)' : 'transparent')};
  color: ${(p) => (p.selected ? p.theme.textColorWithAlpha(0.9) : p.theme.textColorWithAlpha(0.4))};
  padding: 10px 20px;
  border-radius: 10px;
`;
