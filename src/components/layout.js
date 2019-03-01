/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import 'skeleton-css/css/normalize.css';
// import 'skeleton-css/css/skeleton.css';
import 'milligram/dist/milligram.css';
import './layout.css';
import Header from './header';

const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <div className={'container'}>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    )
};

export default Layout;
