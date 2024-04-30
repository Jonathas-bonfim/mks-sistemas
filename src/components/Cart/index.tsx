import { useContext, useEffect, useRef, useState } from 'react';
import { CartContext } from '../../Hooks/context/useCart';
import xBigger from '../../assets/icons/x-bigger.svg';
import { FormatPrice } from '../../utils/formatPrice';
import { Item } from './components/Item';
import { CartContainer } from './styles';

interface CartProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Cart({ visible = false, setVisible }: CartProps) {
  const cartRef = useRef<HTMLDivElement>(null);
  const { cart, FinalizeBuy } = useContext(CartContext);

  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef?.current && !cartRef?.current.contains(event.target as Node)) {
        setVisible(false);
      }
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, setVisible]);

  useEffect(() => {
    const priceProducts = cart.reduce((sumTotal, product) => {
      return sumTotal = sumTotal + (product.quantity as number * Number(product?.price))
    }, 0)
    setTotalValue(priceProducts)

  }, [cart])

  return (
    <>
      {visible && (
        <>
          <CartContainer ref={cartRef}>
            <header>
              <h4>Carrinho de compras</h4>
              <button
                onClick={() => {
                  setVisible(false);
                }}
              >
                <img src={xBigger} alt="" />
              </button>
            </header>
            {
              cart?.length > 0 ? (
                <>
                  <main>
                    {
                      cart.map((cartItem) => {
                        return <Item cartItem={cartItem} />
                      })
                    }
                  </main>
                </>
              ) : (
                <p style={{ color: 'white', textAlign: 'center' }} >Nenhum item foi adicionado!</p>
              )
            }
            <footer>
              <article className="top">
                <b className="total-text">Total</b>
                <b className="total-value">{FormatPrice({ value: totalValue, maximumFractionDigits: 2, minimumFractionDigits: 2 })}</b>
              </article>
              <button
                onClick={() => {
                  FinalizeBuy()
                }}
                disabled={cart?.length <= 0}
              >
                Finalizar Compra
              </button>
            </footer>

          </CartContainer>
        </>
      )}
    </>
  );
}