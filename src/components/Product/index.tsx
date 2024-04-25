import { ProductContainer } from "./styles";

import productImage from '../../assets/images/product-image.png';

import bagIcon from '../../assets/icons/shopping-bag.svg';

export function Product() {
  return (
    <ProductContainer>
      <img
        src={productImage}
        alt="Imagem do produto"
      />

      <article className="title">
        <h4>Apple Watch Series 4 GPS</h4>
        <div>
          <p>R$399</p>
        </div>
      </article>
      <p className="description">Redesigned from scratch and completely revised.</p>

      <button>
        <img src={bagIcon} alt="Ícone de compra" />
        Comprar
      </button>

    </ProductContainer>
  )
}