import styled from "styled-components";

export const ItemContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6rem;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};

  position: relative;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 3.562rem;
      width: auto;
      margin-right: 1.312rem;
    }

    h5 {
      font-weight: 400;
      font-size: 0.812rem;
      line-height: 1.062rem;
      width: 7rem;
    }
  }

  .middle {
    display: flex;
    width: 3.125rem;
    margin-right: 2rem;

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.225rem;

      border: 0.3px solid ${(props) => props.theme.colors.gray};
      border-radius: 4px;

      width: 3.125rem;
      height: 1.187rem;

      .gap {
        height: 100%;
        width: 0.2px;
        background: ${(props) => props.theme.colors.gray};
      }
    }

    button,
    input {
      width: 1.041rem;
      background-color: transparent;
    }

    button,
    input {
      border: none;
      outline: none;
    }

    input {
      font-size: 0.5rem;
      font-weight: 400;
      text-align: center;
      line-height: 0.6rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    .button-add {
      border-radius: 4px 0 0 4px;
      border-right: 0px;
    }

    .button-decrease {
      border-radius: 0 4px 4px 0;
      border-left: 0px;
    }
  }

  .right {
    p {
      font-weight: 700;
      font-size: 0.875ren;
      line-height: 1.06rem;
      color: ${(props) => props.theme.colors.black};
    }
  }

  .button-remove {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -8px;
    top: -8px;

    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.theme.colors.black};
  }
`;
