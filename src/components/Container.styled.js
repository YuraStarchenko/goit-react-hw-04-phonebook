import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 3px #fbdddd;
  width: 350px;
  border-radius: 40px;
  background-color: #f2ecec;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Text = styled.p`
  margin: 10px 0;
`;

export const Title = styled.h2`
  margin: 20px 0;
`;

export const TitleText = styled.h1`
  margin: 20px 10px 0;
`;
