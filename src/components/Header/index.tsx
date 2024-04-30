import { HeaderContainer } from "./styles";

import { useContext, useState } from "react";
import { CartContext } from '../../Hooks/context/useCart';
import { Cart } from "../Cart";

import cartIcon from '../../assets/icons/cart.svg';
import mksImage from '../../assets/images/MKS.svg';
import sistemasImage from '../../assets/images/Sistemas.svg';


export function Header() {
  const [cartVisible, setCartVisible] = useState(false)

  const { cart } = useContext(CartContext)

  return (
    <>
      <HeaderContainer>
        <main className="container-center">
          <section data-testid="header" className="logo">
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
              {
                cart?.length > 0 && (
                  <p>{cart?.length ?? 0}</p>
                )
              }
            </button>
          </section>
        </main>
      </HeaderContainer>
      <Cart visible={cartVisible} setVisible={setCartVisible} />
    </>
  )
}