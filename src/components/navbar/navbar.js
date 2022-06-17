import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div `
display: flex;
position: fixed;
top: 0;
align-items: center;
justify-content: center;
width: 100vw;
z-index: 100;
`
const TextWrapper = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 200px;
`

const StyledLink = styled(Link)`
color: black;
font-weight: 600;
font-size: 30px;
text-align: center;

`
function Header() {

  return (
    <Wrapper>
      <TextWrapper>
        <StyledLink to="/">
          Food
          <br/>Recipes
        </StyledLink>
      </TextWrapper>
    </Wrapper>
  )
}

export default Header
