import styled from "styled-components";
import React from 'react'

const StyledImage = styled.img`

border-radius: 15px;
width: ${props =>
   props.type === "hero" && '100%' ||
   props.type === "three" && '100%' ||
  '150px'
 };
height: ${props =>
   props.type === "hero" && '450px' ||
   props.type === "three" && '450px' ||
  '150px' 
 };

@media (min-width: ${ 768}px) {
  width: ${props =>
   props.type === "hero" && 'auto' ||
   props.type === "three" && '100%' ||
  '150px'
 };
height: ${props =>
   props.type === "hero" && '450px' ||
   props.type === "three" && '450px' ||
  '150px'
 };
  @media (min-width: ${ 1024}px) {
    width: ${props =>
   props.type === "hero" && '60%' ||
   props.type === "four" && '150px' ||
   '100%'
 };
height: ${props =>
   props.type === "hero" && '500px' ||
   props.type === "two" && '250px' ||
   props.type === "three" && '450px' ||
   props.type === "four" && '150px' ||
   props.type === "five" && '300px'
 };}
}
`

export const ArticleImage = ({
  img,
  type
}) => (
  <StyledImage type={type} src={img}/>

);