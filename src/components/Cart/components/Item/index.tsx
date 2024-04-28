import { ItemContainer } from "./styles";

import xSmaller from '../../../../assets/icons/x-smaller.svg';

import productImage from '../../../../assets/images/product-image.png';

export function Item() {
  return (
    <ItemContainer>
      <article className="left">
        <img src={productImage} alt="Imagem do produto" />
        <h5>Apple Watch Series 4 GPS</h5>
      </article>

      <article className="middle">
        <nav className="circle">
          <button className="button-add">-</button>
          <div className="gap"></div>
          <input type="number" name="" id="" />
          <div className="gap"></div>
          <button className="button-decrease" >+</button>
        </nav>
      </article>

      <article className="right">
        <p>R$399</p>
      </article>

      <button className="button-remove">
        <img src={xSmaller} alt="" />
      </button>

    </ItemContainer>
  )
}