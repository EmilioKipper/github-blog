import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  > * {
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
  }

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
