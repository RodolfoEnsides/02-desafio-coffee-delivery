import { ShoppingCart } from 'phosphor-react'
import { CountInput } from '../../../../components/CountInput'
import {
  RegularText,
  TitleText,
} from '../../../../components/Typography/styles'
import { formatToMoney } from '../../../../utils/FormatToMoney'
import {
  AddCartWrapper,
  CardCoffeesBody,
  CardCoffeesContainer,
  CardCoffeesFooter,
  Tags,
} from './styles'

interface CoffeeInfos {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  imagePath: string
  price: number
}

interface CoffeeProps {
  coffee: CoffeeInfos
}

export function CardCoffees({ coffee }: CoffeeProps) {
  const formattedPrice = formatToMoney(coffee.price)
  return (
    <CardCoffeesContainer>
      <img src={coffee.imagePath} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <CardCoffeesBody>
        <TitleText size="s" color="subtitle">
          {coffee.name}
        </TitleText>
        <RegularText size="s" color="label">
          {coffee.description}
        </RegularText>
      </CardCoffeesBody>

      <CardCoffeesFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <CountInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardCoffeesFooter>
    </CardCoffeesContainer>
  )
}
