import { Product } from "../../components/Product";
import { ProductProps, useGetProducts } from "../../reactQuery/queries/useGetProducts";
import { FormatPrice } from "../../utils/formatPrice";
import { HomeContainer } from "./styles";


export function Home() {

  const { data: products, isLoading } = useGetProducts({
    page: 1,
    rows: 50,
  })

  return (
    <HomeContainer>
      <div className="container-center">
        <main className="shelf-product">
          {
            isLoading ? (
              <>
                <article className="products">
                  {
                    Array.from({ length: 8 }).map(() => {
                      return <Product description="" name="" photo="" price="" loading />
                    })
                  }
                </article>
              </>
            ) : (
              <>
                <article className="products">
                  {
                    products?.products?.map((product: ProductProps) => {
                      return <Product
                        key={product?.id}
                        id={product?.id}
                        name={product?.name}
                        description={product?.description}
                        photo={product?.photo}
                        price={FormatPrice({ value: Number(product?.price), maximumFractionDigits: 0, minimumFractionDigits: 0 })}
                      />
                    })
                  }
                </article>
                <p>Total de registros: <b>{products?.count ?? '--'}</b></p>
              </>
            )
          }
        </main>
      </div>
    </HomeContainer>
  )
}