import React from 'react'
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {MDXRenderer} from 'gatsby-plugin-mdx'

const Wrapper = styled.article `
padding: 100px 0;
min-height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Title = styled.h1 `
font-size: 25px;
margin: 15px 0;
font-weight: 700;
text-align: center;
`

const Body = styled.div `
width: 95%;
max-width: 600px;

h2{
  font-size: 25px;
  text-align: center;
  font-weight: 400;
  margin: 20px 0;
}
h3{
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0;
}
p{
  font-size: 15px;
  letter-spacing: 0.8px;
}

`

const PostNavigator = styled.div `
display: flex;
flex-direction: column;
padding-top:  30px;
margin-right: 30px;
`
const StyledLink = styled(Link)`
font-size: 20px;
margin: 5px 0;
`

function BlogPostTemplate({
  data: {
    authorImage,
    coverImage
  },
  pageContext: {
    nextPost,
    page,
    previousPost
  }
}) {
  return (
    <Wrapper>
      <PostNavigator>
        <Link to="/">
          &larr; Back
        </Link>
      </PostNavigator>
      <Body>
        <header>
          <Title>
            {page.title}
          </Title>
        </header>
        <div>
          {coverImage && (<Img fluid={coverImage.localFile.childImageSharp.fluid} fadeIn={false}/>)}
        </div>
        <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
      </Body>
      {(nextPost || previousPost) && (
        <PostNavigator>
          {nextPost && (
            <StyledLink to={`/posts/${nextPost.slug}`}>Next Recipe &rarr;
            </StyledLink>
          )}
          {previousPost && (
            <StyledLink to={`/posts/${previousPost.slug}`}>
            &larr; Previous Recipe 
            </StyledLink>
          )}
        </PostNavigator>
      )}

    </Wrapper>
  )
}

export const pageQuery = graphql `
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
