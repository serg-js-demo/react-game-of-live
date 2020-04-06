import styled from '@emotion/styled';

type LifeBoardDivProps = {
  columns: number;
  rows: number;
}

export const LifeBoardDiv = styled.div<LifeBoardDivProps>`
  position: relative;
  display: grid;
  background-color: red;
  grid-template-columns: repeat(${({columns}: any) => columns}, 1fr);
  grid-template-rows: repeat(${({rows}: any) => rows}, 1fr);
  width: 700px;
  height: 700px;
  margin: 0px;
`;

type LifeBoardCellProps = {
  value: number;
}

export const LifeBoardCell = styled.div<LifeBoardCellProps>` 
  background-color: ${({value}) => value ? 'green': 'blue'};
  display: block;
  float: left;
  margin: 0;
  padding: 0;
`;
