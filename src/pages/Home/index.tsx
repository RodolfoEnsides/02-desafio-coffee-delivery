import { CoffeesList } from './components/CoffeesList'
import { Introduction } from './components/Introduction'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Introduction />
      <CoffeesList />
    </HomeContainer>
  )
}
