import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  margin: 0 auto;
`;

export const Form = styled.form`
  margin: 10px 0;
`;

export const Input = styled.input`
  display: flex;
  width: 250px;
  padding: 8px;
  padding-left: 22px;
  font: inherit;
  outline: transparent;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 20px;
  margin: 10px 0;
`;

export const Button = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: blue;
  border: none;
  border-radius: 20px;
  margin: 20px auto 0;
  transition-property: background-color, fill;
  transition-duration: 250ms;
  cursor: pointer;

  &:hover {
    background-color: #2196f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
