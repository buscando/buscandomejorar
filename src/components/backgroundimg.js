
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'; 
import "../styles/background-image.css"

export default function({ fileName, bgTitle, bgSubtitle }) {
    const data = useStaticQuery(
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { extension: { eq: "jpg" } }
                ) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                fluid(maxWidth: 2480, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    );

    const image = data.placeholderImage.edges.find(
        ({ node }) => node.relativePath === fileName
    ).node;

    if (!image) {
        return null;
    }

    return (
            <BackgroundImage
                fluid={image.childImageSharp.fluid}
                style={{
                    height: `450px`,
                    width: `100vw`,
                    backgroundColor: `transparent`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center`,
                    display: `flex`,
                    alignItems: `center`,
                }}
            >

                    <div className="content-box">                        
                            <h1 className="bg-title">              
                                {bgTitle}
                            </h1>

                            <h5>- {bgSubtitle} -</h5>                        
                    </div>
            </BackgroundImage>
    );
}