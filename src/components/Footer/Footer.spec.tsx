import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { Footer } from ".";
import { CartProvider } from '../../Hooks/context/useCart';
import { queryClient } from '../../reactQuery';

describe('Footer', () => {
  it('Render correctly', () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Footer />
        </CartProvider>
      </QueryClientProvider>
    )
    expect(getByText('MKS sistemas © Todos os direitos reservados')).toBeTruthy()
  })
})