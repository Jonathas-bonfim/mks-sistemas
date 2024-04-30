import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { Header } from ".";
import { CartProvider } from '../../Hooks/context/useCart';
import { queryClient } from '../../reactQuery';

describe('Header', () => {
  it('Render correctly', () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header />
        </CartProvider>
      </QueryClientProvider>
    )
    const element = getByTestId('header');
    expect(element).toHaveClass('logo');
  })
})