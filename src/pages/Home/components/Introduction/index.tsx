import {
  AdvantagesContainer,
  IntroductionContainer,
  IntroductionContent,
  IntroductionTitle,
} from './styles'
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from '../../../../components/Typography/styles'
import { InfoWithIcon } from '../../../../components/InfoWithIconRight'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Introduction() {
  const { colors } = useTheme()

  return (
    <IntroductionContainer>
      <IntroductionContent className="container">
        <div>
          <section>
            <IntroductionTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroductionTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <AdvantagesContainer>
            <InfoWithIcon
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </AdvantagesContainer>
        </div>
        <img src={introImg} alt="" />
      </IntroductionContent>
    </IntroductionContainer>
  )
}
