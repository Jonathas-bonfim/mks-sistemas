import { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';
import { ProductProps, useGetProducts } from '../../reactQuery/queries/useGetProducts';

interface CartProviderProps {
  children: ReactNode;
}

export interface ProductContextProps extends ProductProps {
  quantity?: number;
}

interface CartContextData {
  cart: ProductContextProps[];
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
  FinalizeBuy(): void;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {

  const { data: allProducts } = useGetProducts({
    page: 1,
    rows: 50,
  })

  const [cart, setCart] = useState<ProductContextProps[]>(() => {
    const storageCart = localStorage.getItem('@mkssistemas:cart');

    if (storageCart) {
      return JSON.parse(storageCart);
    }
    return [];
  });

  function addProduct(productId: number) {
    try {
      const updatedCart = [...cart];
      const productExist = updatedCart?.find(product => product.id === productId);

      if (productExist) {
        toast.error(`O produto ${productExist?.name} já foi adicionado ao carrinho!`)
      } else {
        const product: ProductContextProps = allProducts?.products?.find((product: ProductContextProps) => product.id === productId);
        if (product) {
          const newProduct = {
            id: product?.id,
            name: product?.name,
            description: product?.description,
            brand: product?.brand,
            photo: product?.photo,
            price: product?.price,
            quantity: 1,
            createdAt: product?.createdAt,
            updatedAt: product?.updatedAt,
          }
          updatedCart.push(newProduct);
          toast.success('Produto adicionado ao carrinho!')
        }
      }
      setCart(updatedCart);
      localStorage.setItem('@mkssistemas:cart', JSON?.stringify(updatedCart));

    } catch {
      toast.error('Erro ao adicionar o produto produto');
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem('@mkssistemas:cart', JSON.stringify(updatedCart));
        toast.success('Produto Removido com sucesso!');
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  function updateProductQuantity(productId: number, quantity: number) {
    try {
      if (quantity <= 0) {
        return;
      }
      const updatedCart = [...cart];
      const productExist = updatedCart.find(product => product.id === productId);

      if (productExist) {
        productExist.quantity = quantity;
        setCart(updatedCart);
        localStorage.setItem('@mkssistemas:cart', JSON.stringify(updatedCart));
      } else {
        throw Error();
      }
    } catch (e) {
      toast.error('Erro na alteração de quantidade do produto');
    }
  }

  function FinalizeBuy() {
    setCart([]);
    localStorage.removeItem('@mkssistemas:cart');
    toast.success('Compra finalizada!')
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, updateProductQuantity, FinalizeBuy }}>
      {children}
    </CartContext.Provider>
  )
}