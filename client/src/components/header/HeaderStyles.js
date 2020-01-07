import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 10px;
  cursor: pointer;
`;
