import React from 'react'
import {
  CardDeck,
  Card,
  CardHeader,
  Badge
} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'

const Tag = () => (
    <CardDeck style={{display: 'flex', flexDirection: 'column'}}>
        <StaticQuery
          query={tagQuery}
          render={data => (
            <>            
              {data.allMarkdownRemark.group.map(element => (                  
                    <Card style={{flex: 1, border: '0px', marginBottom: '0px', marginTop: '0px' }}>
                        <CardHeader >                              
                            <Link to={`/tag/${element.fieldValue}`.toLowerCase()}>{element.fieldValue}    </Link> 
                            <Badge color="light">( {element.totalCount} )</Badge>                            
                        </CardHeader>
                    </Card>              
                  
              ))}            
            </>
          )}
        /> 
    </CardDeck>  
)

const tagQuery = graphql`
  query tagQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount      
      }        
    }
  }
`

export default Tag