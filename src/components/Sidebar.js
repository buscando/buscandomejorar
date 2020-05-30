import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardText
} from 'reactstrap'
//import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = ({ author, authorFluid }) => (
  <div>
    {author && (
      <>      
      <Card>
        <Img className="card-image-top" fluid={authorFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            {author.name}
          </CardTitle>
          <CardText>{author.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li>
                <a
                  href={author.instagram}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <i className="fab fa-instagram fa-lg" />
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
      </>
    )}   
  </div>
)

export default Sidebar
