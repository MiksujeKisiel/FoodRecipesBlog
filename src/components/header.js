import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
height: 100vh;
background-image: url("https://i.imgur.com/Kgd2jBy.jpeg");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
`
const TextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
color: white;
font-size: 18px;
font-weight: 500;
margin: 20px 0;

`
const Text = styled.p`
color: white;
font-size: 25px;
font-weight: 700;
@media (min-width: ${ 768}px) {
font-size: 34px;

}
`
const StyledLink = styled(Link)`
color: white;
font-weight: 500;
margin-top: 40px;
font-size: 20px;
`
function Header() {



  return (
    <Wrapper>
     <TextWrapper>
      <Title>The greatest cookbook of all time!</Title>
      <Text>MAKING HEALTHY TASTE GOOD</Text>
      <StyledLink>
Learn more ❯
      </StyledLink>
     </TextWrapper>
    </Wrapper>
  )
}

export default Header
