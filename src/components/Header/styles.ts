import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props?.theme?.colors?.blue};

  height: 6.312rem;

  .container-center {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    height: 100%;
  }

  .logo {
    .mks-image {
      margin-right: 0.375rem;
    }
  }

  .section-cart {
    display: flex;

    width: 5.625rem;
    height: 2.812rem;

    button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      border-radius: 8px;
      border: none;
      height: 100%;
      width: 100%;
    }
  }
`;
