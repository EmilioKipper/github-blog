import styled from 'styled-components'

export const Container = styled.header`
  > img {
    width: 100%;
    max-height: 269px;
    background-color: ${(props) => props.theme.profile};
  }
`

export const Card = styled.div`
  > img {
    max-width: 148px;
    border-radius: 8px;
    border: 1px solid #000000;
    margin-right: 32px;
  }

  > div {
    display: flex;
    flex-direction: column;
    min-height: 148px;
    justify-content: space-between;
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 864px;
  margin: auto;
  position: relative;
  z-index: 2;
  margin-top: -100px;
  background-color: ${(props) => props.theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 32px 40px;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
`

export const About = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme.text};
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 24px;

  > span svg {
    margin-right: 8px;
    color: ${(props) => props.theme.label};
  }
`
