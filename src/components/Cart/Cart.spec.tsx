import { render } from '@testing-library/react';
import { Cart } from '.';

describe('Header', () => {
  it('Render correctly', () => {
    const { getByText } = render(
      <Cart visible={true} />
    )
    expect(getByText('Carrinho de compras')).toBeTruthy()
    expect(getByText('Finalizar Compra')).toBeTruthy()
  })
})
