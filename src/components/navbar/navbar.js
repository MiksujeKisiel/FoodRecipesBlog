import React from 'react'
import {Link} from 'gatsby'
import styled, {css} from 'styled-components'
import { useScroll } from '../../hooks/ScrollNavbar'
const Wrapper = styled.div `
display: flex;
position: fixed;
top: 0;
align-items: center;
justify-content: center;
width: 100vw;
z-index: 2;
background-color: transparent;

padding: 10px 0;
${props =>
      props.isScrolled &&
      css`
        background: rgba(255,255,255,0.8);
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
        transition: 0.5s ease-in;
      `}
`
const TextWrapper = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 200px;
`

const StyledLink = styled(Link)`
color: white;
z-index: 100;
position: static;
font-weight: 600;
font-size: 30px;
text-align: center;
${props =>
      props.isScrolled &&
      css`
      color: black;
      transition: 0.5s ease-in;
      `}
`
function Header() {
  const { isScrolled } = useScroll()

  return (
    <Wrapper isScrolled={isScrolled}>
      <TextWrapper>
        <StyledLink to="/" isScrolled={isScrolled}>
          Food
          <br/>Recipes
        </StyledLink>
      </TextWrapper>
    </Wrapper>
  )
}

export default Header
