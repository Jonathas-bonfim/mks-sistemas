import { ProductContainer } from "./styles";

import bagIcon from '../../assets/icons/shopping-bag.svg';

interface ProductComponentProps {
  name: string;
  description: string;
  price: string;
  photo: string;
}

export function Product({ name, description, price, photo }: ProductComponentProps) {
  return (
    <ProductContainer>
      <img
        src={photo}
        alt="Imagem do produto"
      />

      <article className="title">
        <h4>{name}</h4>
        <div>
          <p>{`${price}`}</p>
        </div>
      </article>
      <p className="description">{description.substring(0, 50) + '...'}</p>

      <button>
        <img src={bagIcon} alt="Ícone de compra" />
        Comprar
      </button>

    </ProductContainer>
  )
}