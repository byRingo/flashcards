import styled from "styled-components";

export const SubmitButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  &:hover {
    border: 1px solid black;
  }
`;

export const AppSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 800px;
`;

export const GridCell = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 1.5em;
  font-weight: 500;
`;

export const FormSection = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const DeleteButton = styled.button`
  background: white;
  position: relative;
  left: -25px;
  top: -25px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: none;
  &:hover {
    color: red;
    border: 1px solid black;
  }
`;
