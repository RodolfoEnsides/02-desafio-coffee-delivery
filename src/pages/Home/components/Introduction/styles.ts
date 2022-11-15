import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.png'

export const IntroductionContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${theme.colors['base-background']} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroductionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
