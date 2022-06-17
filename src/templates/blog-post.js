import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'



const Wrapper = styled.article`
padding: 100px 0;
min-height: 100vh;
display: flex;
justify-content: center;
`
const Title = styled.h1`
font-size: 25px;
margin: 15px 0;
font-weight: 700;
text-align: center;
`

const Body = styled.div`
width: 600px;

`
const ImgWrapper = styled.div`

`

const PostNavigator = styled.div`
display: flex;
flex-direction: column;
padding-top:  30px;
margin-right: 30px;

`



function BlogPostTemplate({
  data: { authorImage, coverImage },
  pageContext: { nextPost, page, previousPost },
})

{
  return (
    <Wrapper>
      
      <PostNavigator className="space-y-8 py-8">
           
           
              <Link to="/" >
              &larr; Back 
            </Link>
            </PostNavigator>
      <Body>
      <header className="pt-6 lg:pb-10">
      <Title>
      {page.title}
    
      </Title>
  
      </header>
  
     <ImgWrapper>
     {coverImage && (
            <Img
              fluid={coverImage.localFile.childImageSharp.fluid}
              fadeIn={false}
            />
          )}
     </ImgWrapper>
         
            <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
         
            
      </Body>
      {(nextPost || previousPost) && (
            <PostNavigator className="space-y-8 py-8">
            {nextPost && (
          
                  <Link to={`/posts/${nextPost.slug}`}>Next Recipe  &rarr; </Link>
             
            )}
            {previousPost && (
               <Link to={`/posts/${previousPost.slug}`}>
               Previous Recipe &rarr; 
               
             </Link>
            )}
             
                  
               
          </PostNavigator>
          )}
      
    </Wrapper>
  )
}

export const pageQuery = graphql`
  fragment AssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  query BlogPostQuery($id: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {
        elemMatch: { posts: { elemMatch: { id: { in: [$id] } } } }
      }
    ) {
      ...AssetFields
    }
    coverImage: graphCmsAsset(
      coverImagePost: { elemMatch: { id: { eq: $id } } }
    ) {
      ...AssetFields
    }
  }
`

export default BlogPostTemplate
