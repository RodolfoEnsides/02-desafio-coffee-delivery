import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import coffeeLogoImg from '../../assets/coffeedelivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const cartItemsQuantity = 0
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variantBackground="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variantBackground="yellow">
              {cartItemsQuantity >= 1 && <span>{cartItemsQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
