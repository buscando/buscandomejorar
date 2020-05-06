import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Tag from './Tags'
import '../styles/index.scss'

import { Row, Col } from 'reactstrap'

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor, location}) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    
    render={data => (      
      <>   
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <Header siteTitle={data.site.siteMetadata.title} />   
        <div>   
           {location && ( <Topbar/>) }         
        </div>    
        <br></br>                   
        <div style={{marginRight: '10%', marginLeft: '10%'}}>                     
          <Row>
            <Col md="8">
                {children}
            </Col>
            <Col md="4">
              <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
              <Tag/>
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout