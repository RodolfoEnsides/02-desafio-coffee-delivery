import { PaymentOptionsInput } from '../PaymentOptionsInput'
import { PaymentOptionsContainer } from './styles'

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <PaymentOptionsInput />
      <PaymentOptionsInput />
      <PaymentOptionsInput />
    </PaymentOptionsContainer>
  )
}
