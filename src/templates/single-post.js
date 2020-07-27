import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import authors from '../util/authors'
//import { DiscussionEmbed } from 'disqus-react'
//import { CommentSection } from "gatsby-theme-comments"
import CommentSection from '../components/CommentSection'


const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)

  const baseUrl = 'https://buscandomejorar.com'

  //const disqusShortname = 'https-gatsbytutorial-co-uk'
  //const disqusConfig = {
  //  identifier: data.markdownRemark.id,
  //  title: post.title,
  //  url: baseUrl + pageContext.slug,
  //}

  return (
    <>
    <Layout
      pageTitle={post.title}
      postAuthor={author}
      authorImageFluid={data.file.childImageSharp.fluid}
    >
      <SEO
        author={post.author}
        title={post.title}
        keywords={post.tags}
        description={post.description}
        url={baseUrl}
        pathname={location.pathname}
      />

      <Card>
        <Img
          classNameNameName="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody>
          <CardSubtitle>
            <span classNameNameName="text-info">{post.date}</span> by{' '}
            <span classNameNameName="text-info">{post.author}</span>
          </CardSubtitle>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <ul classNameNameName="post-tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="info">{tag}</Badge>
                </Link>
              </li>
            ))}
          </ul>          
        </CardBody>           
      </Card>      
            
      <CommentSection id={slugify(pageContext.slug)} />
    </Layout>
    </>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SinglePost
