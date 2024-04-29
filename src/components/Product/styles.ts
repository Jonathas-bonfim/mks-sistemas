import styled from "styled-components";

export const ProductContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  width: 13.625rem;
  max-height: 17.812rem;
  height: 100%;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 5px 5px 12px 12px;

  img {
    width: 7rem;
    height: 8.625rem;

    margin-block: 1.125rem 0.875rem;
    object-fit: contain;
  }

  .title,
  p {
    padding-inline: 0.5rem;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    height: 2.375rem;

    margin-bottom: 0.5rem;

    h4 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.187rem;
      color: ${(props) => props.theme.colors.dark2};
    }

    div {
      background-color: ${(props) => props.theme.colors.dark};
      border-radius: 5px;

      p {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  .description {
    font-size: 0.625rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.dark2};
    margin-bottom: 0.75rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.875rem;

    width: 100%;
    height: 2rem;

    background-color: ${(props) => props.theme.colors.blue};
    border: none;

    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme.colors.white};

    border-radius: 0 0 12px 12px;

    img {
      height: 12px;
      width: 12px;
    }
  }
`;
