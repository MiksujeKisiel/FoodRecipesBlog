import React from 'react'
import styled from 'styled-components'

export const Newsletter = () => {
  return (
    <Wrapper>
      <Text>
        SIGN UP FOR OUR NEWSLETTER</Text>
      <InputWrapper>
        <Label>Enter your email here *</Label>
        <Input></Input>
        <Button>subscribe</Button>
      </InputWrapper>
    </Wrapper>

  )
}

const Wrapper = styled.div `
justify-self: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto 0;
@media (min-width: ${ 768}px) {
flex-direction: row;
}
`

const Input = styled.input `
border: none;
border-bottom: black 1px solid;
background-color: transparent;
`
const Label = styled.label `
font-size: 13px;
margin-bottom: 5px;

`
const Text = styled.p `
font-size: 24px;
font-weight: 500;
max-width: 250px;
text-align: center;
margin: 0 20px 20px 0;
letter-spacing: 1px;
@media (min-width: ${ 768}px) {
text-align: right;
}
`
const Button = styled.button `
background: none;
color: #635f5a;
border: none;
margin-right: auto;
font-size: 13px;
font-weight: 100;
text-transform: uppercase;
padding: 0;
cursor: pointer;
margin-top: 15px;
`

const InputWrapper = styled.div `
display: flex;
flex-direction: column;
width: 200px;
`
