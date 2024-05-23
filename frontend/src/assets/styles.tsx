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
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  height: 89dvh;
`;

export const GridSection = styled.div`
  display: grid;
  grid-auto-rows: 7rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 15px;
  width: 600px;
`;

export const GridCell = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 1.5em;
  font-weight: 500;
  background-color: white;
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

export const LabelComponent = styled.label`
  color: white;
`;

export const InputComponent = styled.input`
  padding: 0.3rem;
`;

export const HeaderComponent = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
`;
