import { Articles} from './articles'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'


const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
grid-row-gap: 20px;
grid-column-gap: 15px;
margin: 15px auto;
max-width: 1100px;
grid-row-gap: 20px;

@media (min-width: ${ 1024}px) {
grid-template-columns: ${props =>
   props.type === "hero" && 'repeat(1, 1fr)' ||
   props.type === "two" && 'repeat(4, 1fr);' ||
   props.type === "three" && 'repeat(2, 1fr);' ||
   props.type === "four" && 'repeat(2, 1fr);' ||
   props.type === "five" && 'repeat(3, 1fr);'
 };
}
`

export function Article({posts, type}) {
  return ( 
  <ArticleWrapper type={type}>
{posts.map((post) => {
            return (
              <Link key={post.title} to={`/posts/${post.slug}`}>
                <Articles
                  img={post.coverImage.url}
                  title={post.title}
                  type={type}
                  excerpt={post.excerpt}/>
              </Link>
            )
          })}
  </ArticleWrapper>

    
  )
}