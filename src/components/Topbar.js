import React from 'react'
import {
  CardDeck,
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image' 

const Topbar = () => (
    <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: '20%', marginLeft: '20%'}}>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card style={{flex: 1}} key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </>
          )}
        />
    </CardDeck>
    

)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Topbar
