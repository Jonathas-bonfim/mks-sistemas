import styled from "styled-components";

export const CartContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 30.375rem;
  height: 100vh;

  box-shadow: -5px 0px 6px 0px #00000021;
  background-color: ${(props) => props.theme.colors.blue};

  main {
    display: flex;
    flex-direction: column;
    gap: 1.375rem;

    height: 100%;
    overflow-y: auto;
    padding-block: 0.5rem;
  }

  header,
  main,
  footer > .top {
    padding-inline: 1.375rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-block: 2.25rem 4rem;

    h4 {
      font-weight: 700;
      font-size: 1.687rem;
      color: ${(props) => props.theme.colors.white};
      max-width: 11.25rem;
    }

    button {
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 50%;
      border: none;
      background-color: ${(props) => props.theme.colors.black};
    }
  }

  footer {
    height: 12.125rem;
    width: 100%;

    position: relative;
    bottom: 0;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 6.062rem;
      width: 100%;

      b {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 0.937rem;
        color: ${(props) => props.theme.colors.white};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 6.062rem;
      width: 100%;
      border: none;

      font-weight: 700;
      font-size: 1.75rem;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.black};
    }
  }
`;
