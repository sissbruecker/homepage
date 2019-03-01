import React from 'react';
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ path }) => {

    const data = useStaticQuery(graphql`
      query {
        image: file(relativePath: { eq: "archer.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    return <Img fluid={data.image.childImageSharp.fluid} style={{width: '400px'}}/>;
};
export default Image;
