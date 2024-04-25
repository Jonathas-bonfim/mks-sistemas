import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.primary};
  }

  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.dark2};
  }

  button,
  link {
  cursor: pointer;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
  }

  .container-center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    margin-inline: auto;
    max-width: 1220px;
    width: 100%;

    @media screen and (max-width: 1300px) {
      justify-content: center;
      padding-inline: 1rem;
      margin: 0 auto;

      img {
        width: 100%;
      }
    }
  }
`;
