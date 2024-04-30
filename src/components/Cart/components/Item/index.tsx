import { ItemContainer } from "./styles";

import xSmaller from '../../../../assets/icons/x-smaller.svg';

import { useContext, useEffect, useState } from "react";
import { CartContext, ProductContextProps } from "../../../../Hooks/context/useCart";

interface itemProps {
  cartItem: ProductContextProps
}

export function Item({ cartItem }: itemProps) {

  const { removeProduct, updateProductQuantity } = useContext(CartContext)

  const [value, setValue] = useState(cartItem?.quantity ?? 0 as number)


  useEffect(() => {
    updateProductQuantity(cartItem?.id as number, value)
  }, [value])

  return (
    <ItemContainer>
      <article className="left">
        <img src={cartItem?.photo} alt="Imagem do produto" />
        <h5>{cartItem?.name}</h5>
      </article>

      <article className="middle">
        <nav className="circle">
          <button
            className="button-add"
            onClick={() => {
              setValue(prev => prev - 1)
            }}
            disabled={value <= 1}
          >
            -
          </button>
          <div className="gap"></div>
          <input
            type="number"
            name=""
            id=""
            value={value}
            onChange={(e) => {
              setValue(Number(e?.target?.value))
            }}
          />
          <div className="gap"></div>
          <button
            className="button-decrease"
            onClick={() => {
              setValue(prev => prev + 1)
            }}
          >
            +
          </button>
        </nav>
      </article>

      <article className="right">
        <p>{cartItem?.price}</p>
      </article>

      <button className="button-remove"
        onClick={() => {
          removeProduct(cartItem?.id as number)
        }}
      >
        <img src={xSmaller} alt="" />
      </button>

    </ItemContainer>
  )
}