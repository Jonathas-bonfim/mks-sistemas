import { HeaderContainer } from "./styles";

import mksImage from '../../assets/images/MKS.svg';
import sistemasImage from '../../assets/images/Sistemas.svg';

import cartIcon from '../../assets/icons/cart.svg';

export function Header() {
  return (
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
          <button>
            <img src={cartIcon} alt="" />
            <p>2</p>
          </button>
        </section>
      </main>
    </HeaderContainer>
  )
}