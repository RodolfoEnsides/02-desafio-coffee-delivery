import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import coffeeLogoImg from '../../assets/coffeedelivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  const cartItemsQuantity = 0
  return (
    <HeaderContainer>
      <div className="container">
        <a href="#">
          <img src={coffeeLogoImg} alt="" />
        </a>

        <HeaderButtonsContainer>
          <HeaderButton variantBackground="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <a href="#">
            <HeaderButton variantBackground="yellow">
              {cartItemsQuantity >= 1 && <span>{cartItemsQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </a>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
