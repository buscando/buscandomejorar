import React from 'react'
import Layout from '../components/layout'
//import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

const IndexPage = () => { 
  const postsPerPage = 8
  let numberOfPages
  return (   
    <div>
      <Layout > 
                    
        <StaticQuery
          query={indexQuery}
          render={data => {
            numberOfPages = Math.ceil(
              data.allMarkdownRemark.totalCount / postsPerPage
            )
            return (       
              <>
                <div class="card-deck">                      
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
                </div>
                <div>
                <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
                </div>
              </>
            )
          }}
        />
        
      </Layout>
    </div>
  )
}

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 8
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