import React from 'react'
import styled from 'styled-components'
import {Newsletter} from './newsletter'
function Footer() {
  return (
    <Wrapper>
      <Newsletter/>
      <Text>
        © 2022 By Sebastian Makowski. Proudly created with Gatsby & styled components
      </Text>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer `
background-color: #d8cec0;
height: 25vh;
min-height: 300px;
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: column;
margin-top: 100px;
`

const Text = styled.p `
font-size: 11px;
margin: 20px 0;
justify-self: end;
`
