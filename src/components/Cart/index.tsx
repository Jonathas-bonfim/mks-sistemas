import { useEffect, useRef } from 'react';
import xBigger from '../../assets/icons/x-bigger.svg';
import { Item } from './components/Item';
import { CartContainer } from './styles';

interface CartProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Cart({ visible = false, setVisible }: CartProps) {
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
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
            <main>
              <Item />
            </main>
            <footer>
              <article className="top">
                <b className="total-text">Total</b>
                <b className="total-value">R$798</b>
              </article>
              <button>Finalizar Compra</button>
            </footer>
          </CartContainer>
        </>
      )}
    </>
  );
}
