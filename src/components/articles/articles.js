import styled from "styled-components";
import React from 'react'
import {Text} from './text'
import {ArticleImage} from "./image";

export const Articles = ({img, title, excerpt, type}) => {
  return (
    <Wrapper type={type}>
      <ArticleImage img={img} type={type}/>
      <Text title={title} excerpt={excerpt} type={type}/>
    </Wrapper>
  );

}

const Wrapper = styled.div `
width: 95%;
text-decoration: none;
display: flex;
flex-direction: ${props =>
   props.type === "hero" && 'column' ||
   props.type === "two" && 'row' ||
   props.type === "three" && 'column' ||
   props.type === "four" && 'row' ||
   props.type === "five" && 'row'
 };
border-radius: 15px;
border: 1px solid #e0dcdc;
margin: 0 auto;
@media (min-width: ${ 768}px) {
  width: 80%;
}
@media (min-width: ${ 1024}px) {
  flex-direction: ${props =>
   props.type === "hero" && 'row' ||
   props.type === "two" && 'column' ||
   props.type === "three" && 'column' ||
   props.type === "four" && 'row' ||
   props.type === "five" && 'column'
 };
 height: ${props =>
   props.type === "hero" && 'auto' ||
   props.type === "two" && '550px' ||
   props.type === "three" && '600px' ||
   props.type === "four" && 'auto' ||
   props.type === "five" && '500px'
 };
width: 100%;
    ${props => (props.type === 'hero') && `
  border: none;
 `}
}
 
 
`