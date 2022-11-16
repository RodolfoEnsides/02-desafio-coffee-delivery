import { TitleText } from '../../../../components/Typography/styles'
import { coffees } from '../../../../data/coffees'
import { CardCoffees } from '../CardCoffee'
import { CoffeeListGrid, CoffeesListContainer } from './styles'

export function CoffeesList() {
  return (
    <CoffeesListContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeListGrid>
        {coffees.map((coffee) => (
          <CardCoffees key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListGrid>
    </CoffeesListContainer>
  )
}
