import styled from 'styled-components';

const Grid = styled.div`
  /* Grid styles */
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 
    min-content minmax(325px, 1fr) minmax(0, 1fr);
  grid-template-areas:
    'header header header'
    'sidebar main annotations'
    'footer footer footer';
  align-items: start;
  grid-gap: 20px;
  justify-items: start;

  @media (max-width: ${(p) => p.theme.breakpoint.mobile}) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 
      minmax(0, ${(p) => p.theme.breakpoint.mobile});
    grid-template-areas:
      'header'
      'sidebar'
      'main'
      'footer';
  }
`;

export default Grid;
