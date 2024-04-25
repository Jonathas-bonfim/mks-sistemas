import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  min-height: calc(100vh - 6rem);
  margin-bottom: 3rem;

  .container-center {
    max-width: 1120px;
    margin: 0 auto;
  }

  .shelf-product {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.375rem;
    flex-wrap: wrap;

    height: 100%;
    width: 100%;

    .products {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      flex-wrap: wrap;
      gap: 1.375rem;

      @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
