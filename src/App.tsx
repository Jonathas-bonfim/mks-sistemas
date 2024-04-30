import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CartProvider } from "./Hooks/context/useCart"
import { Router } from "./Router"
import { QueryClientProvider, queryClient } from "./reactQuery"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <CartProvider>
            <GlobalStyle />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
            <ToastContainer />
          </CartProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
