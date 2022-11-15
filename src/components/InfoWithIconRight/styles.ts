import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface InfoWithIconProps {
  iconBg?: string
  iconColor?: string
}

export const IconContainer = styled.div<InfoWithIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;

  background: ${({ iconBg }) => iconBg || 'transparent'};
  color: ${({ theme }) => theme.colors['base-white']};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ iconColor }) => iconColor || 'base-white'};
  }
`
