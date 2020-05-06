import React from 'react'
import Layout from '../components/layout'
//import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

import { CardDeck } from 'reactstrap'

const IndexPage = () => { 
  const postsPerPage = 4
  let numberOfPages
  return (   
    <div >
      <Layout location ="/"> 
        <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>             
        <StaticQuery
          query={indexQuery}
          render={data => {
            numberOfPages = Math.ceil(
              data.allMarkdownRemark.totalCount / postsPerPage
            )
            return (       
              <>
                {data.allMarkdownRemark.edges.map(({ node }) => (               
                  <Post
                    key={node.id}
                    slug={node.fields.slug}
                    author={node.frontmatter.author}
                    body={node.excerpt}
                    date={node.frontmatter.date}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                  />                  
                ))}
                <div className="container" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
                </div>
              </>
            )
          }}
        />
        </CardDeck>
      </Layout>
    </div>
  )
}

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage