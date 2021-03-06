import React from 'react'
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody
} from 'reactstrap'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) => (
  <Card col-lg-6 col-md-2 col-sm-12 style={{ minWidth: '20rem', marginBottom: '30px'}}>
    <Link to={slug}>    
    <Img className="card-image-top" fluid={fluid}  /> 
    </Link>
    <CardBody>
      <CardTitle>
        <Link to={slug}>{title}</Link>
      </CardTitle>
      <CardSubtitle>
        <span className="text-info"></span> by{' '}
        <span className="text-info">{author}</span>
      </CardSubtitle>
      <CardText >{body}</CardText>
      <ul className="post-tags">
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}>
              <Badge style={{color: '#8ed1fc', backgroundColor: 'white' }} >
                {tag}
              </Badge>
            </Link>
          </li>
        ))}
      </ul>
      <br/>
      <Link
        to={slug}
        className="btn btn-outline-primary float-right text-uppercase"
      >
        Read more
      </Link>
    </CardBody>
  </Card>
)

export default Post
