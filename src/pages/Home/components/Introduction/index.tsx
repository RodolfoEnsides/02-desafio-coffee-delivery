import { IntroductionContainer } from './styles'
import introImg from '../../../../assets/intro-img.png'

export function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </section>
      </div>
      <img src={introImg} alt="" />
    </IntroductionContainer>
  )
}
