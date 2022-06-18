import React from 'react'
import styled from 'styled-components';

export const Text = ({title, excerpt, type
}) =>
{
  return ( 
    <Wrapper>
      <Title type={type}>
        {title}
      </Title>
      <Paragraph type={type}>
        {excerpt}
      </Paragraph>
    </Wrapper>
);
} 

const Wrapper = styled.div `
padding: 5px;
align-self: flex-start;
@media (min-width: ${ 768}px) {
  padding: 5px 10px;
}

`
const Title = styled.p`
    margin-bottom: 5px;
    color: #1a1a1a;
    font-weight: 800;
    font-size: ${props =>
   props.type === "hero" && '28px' ||
   props.type === "two" && '16px' ||
   props.type === "three" && '28px' ||
   '14px'
   
 };
 @media (min-width: ${ 768}px) {
  margin: 15px 0;
  font-size: ${props =>
   props.type === "hero" && '34px' ||
   props.type === "two" && '20px' ||
   props.type === "three" && '16px' ||
   '17px'
  }
}
  
`
const Paragraph = styled.p`
font-weight: 100;
font-size: 18px; 
letter-spacing: 0.5px;
font-size: ${props =>
   props.type === "hero" && '18px' ||
   props.type === "two" && '16px' ||
   props.type === "three" && '18px' ||
   '16px'
 };
  @media (min-width: ${ 768}px) {

font-size: ${props =>
 props.type === "hero" && '20px' ||
 props.type === "two" && '18px' ||
 props.type === "three" && '16px' ||
 '16px'
}

}
@media (min-width: ${ 1280}px) {
  font-size: ${props =>
 props.type === "hero" && '18px' ||
 props.type === "two" && '18px' ||
 props.type === "three" && '16px' ||
 '16px'
}
  }
`

