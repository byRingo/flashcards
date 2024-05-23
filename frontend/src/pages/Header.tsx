import styled from "styled-components";
import { HeaderComponent } from "../assets/styles.tsx";

export const DecksLink = styled.a`
  font-size: 24px;
  color: #7575ca;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <p>LOGO</p>
      <DecksLink href="/">Decks</DecksLink>
      <p>Login in</p>
    </HeaderComponent>
  );
}
