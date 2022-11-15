import { ReactNode } from 'react'
import { InfoWithIconContainer, IconContainer } from './styles'

interface InfoItemProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg?: string
  iconColor?: string
}

export function InfoWithIcon({ icon, text, iconBg, iconColor }: InfoItemProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg} iconColor={iconColor}>
        {icon}
      </IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
