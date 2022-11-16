import { Minus, Plus } from 'phosphor-react'
import { CountInputContainer, IconButtonWrapper } from './styles'

export function CountInput() {
  return (
    <CountInputContainer>
      <IconButtonWrapper>
        <Minus size={14} weight="fill" />
      </IconButtonWrapper>
      <input type="number" readOnly value={1} />
      <IconButtonWrapper>
        <Plus size={14} weight="fill" />
      </IconButtonWrapper>
    </CountInputContainer>
  )
}
