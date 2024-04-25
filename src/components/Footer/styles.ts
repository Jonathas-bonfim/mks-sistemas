import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white2};

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.125rem;

  p {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 150%;
    color: ${(props) => props.theme.colors.dark};
  }
`;
