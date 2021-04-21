import { getByText, render, screen } from '@testing-library/react';
import App from './App';
import InitialPage from './Pages/InitialPage/InitialPage'

describe("Primeira página", () => {
  describe("Elementos que aparececm", () => {
    it("A página Inicial redenrizou sem crashar", () => {
      render(<InitialPage></InitialPage>)
    })

    it("O botão começar é exibido.", () => {
      render(<App />);
      expect(screen.getByText("Começar")).toBeInTheDocument
    })

    it("O card é exibido", () => {
      render(<App />);
      expect(screen.getByText("Como animar seu pet:")).toBeInTheDocument
    })
  })

  describe("Testando funções: ", () => {
    it("O número foi multiplicado", () => {
      expect(oDobro(2)).toBe(4)
    })
  })
  function oDobro(numero) {
    return numero * 2
  }
})
