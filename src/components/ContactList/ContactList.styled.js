import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  min-width: 50px;
  height: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: blue;
  border: none;
  border-radius: 20px;
  margin: 10px 0;
  transition-property: background-color, fill;
  transition-duration: 250ms;
  cursor: pointer;

  &:hover {
    background-color: #2196f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
