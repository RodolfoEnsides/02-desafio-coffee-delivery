import styled from 'styled-components'

export const CardCoffeesContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    padding-top: 0;
    margin-top: calc(0px - 2rem - 16px);
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`

export const CardCoffeesBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const CardCoffeesFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors['base-text']};

  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['brand-purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};

    margin-left: 0.3rem;
    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`
