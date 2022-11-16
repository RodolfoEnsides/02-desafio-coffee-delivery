import { CreditCard } from 'phosphor-react'
import { PaymentOptionsInputContainer } from './styles'

export function PaymentOptionsInput() {
  return (
    <PaymentOptionsInputContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </PaymentOptionsInputContainer>
  )
}
