import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Articles } from '../components/articles/articles'
import Header from '../components/header'

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
max-width: 1300px;
align-items: center;
margin: 20px auto;
justify-content: center;
`

const Title = styled.p`
font-size: 22px;
font-weight: 600;
text-align: center;
margin: 50px 0;
@media (min-width: ${ 768}px) {
font-size: 36px;
margin: 100px 0;
}
`


function IndexPage({ data: { allGraphCmsPost } }) {
  const hero = allGraphCmsPost.nodes.slice(0,1);
  const two = allGraphCmsPost.nodes.slice(1,5)
  const three = allGraphCmsPost.nodes.slice(5,7)
  const four = allGraphCmsPost.nodes.slice(7,11)
  const five = allGraphCmsPost.nodes.slice(11,14)


  return (
    <>
    <div className="mt-10 divide-y divide-gray-200">
      <section>
   <div >
    <Header/>
    <Title>
      The best food recipes in one place!
    </Title>
   <Wrapper>
   {allGraphCmsPost.nodes.length > 0 && 
   <>
   <Articles posts={hero} type="hero" />
   <Articles posts={two} type="two" />
   <Articles posts={three} type="three" />
   <Articles posts={four} type="four" />
   <Articles posts={five} type="five" />
   </>}

</Wrapper>
</div>
</section>
</div>
</>
)}

export default IndexPage

export const indexPageQuery = graphql`
{
  allGraphCmsPost (sort: { fields: date, order: DESC }){
    nodes {
      title
      slug
      coverImage {
        url
      }
      excerpt
    }
  }
}
`
