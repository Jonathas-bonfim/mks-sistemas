import { Product } from "../../components/Product";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div className="container-center">
        <main className="shelf-product">
          <article className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </article>
        </main>
      </div>
    </HomeContainer>
  )
}