import { HeaderContainer } from "./styles";

import mksImage from '../../assets/images/MKS.svg';
import sistemasImage from '../../assets/images/Sistemas.svg';

import { useState } from "react";
import cartIcon from '../../assets/icons/cart.svg';
import { Cart } from "../Cart";

export function Header() {
  const [cartVisible, setCartVisible] = useState(false)

  return (
    <>
      <HeaderContainer>
        <main className="container-center">
          <section className="logo">
            <img
              src={mksImage}
              alt=""
              className="mks-image"
            />
            <img
              src={sistemasImage}
              alt=""
              className="sistemas-image"
            />
          </section>
          <section className="section-cart">
            <button
              onClick={() => {
                setCartVisible((prev) => !prev)
              }}
            >
              <img src={cartIcon} alt="" />
              <p>2</p>
            </button>
          </section>
        </main>
      </HeaderContainer>
      <Cart visible={cartVisible} setVisible={setCartVisible} />
    </>
  )
}