import { motion } from "framer-motion";
import { ProductContainer } from "./styles";

import bagIcon from '../../assets/icons/shopping-bag.svg';

interface ProductComponentProps {
  name: string;
  description: string;
  price: string;
  photo: string;
  loading?: boolean;
}

export function Product({ name, description, price, photo, loading = false }: ProductComponentProps) {
  return (
    <>
      {
        loading ? (
          <ProductContainer>
            <motion.div
              style={{ height: '17.812rem', width: '100%', backgroundColor: '#ccc' }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="motion-div-image"
            ></motion.div>
          </ProductContainer>
        ) : (
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
    </>
  )
}