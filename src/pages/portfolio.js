import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import ExtLink from '../components/extlink';
import styles from './portfolio.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SubTitle from '../components/subtitle';

const PortfolioPage = () => {

    const data = useStaticQuery(graphql`
      query {
        archer: file(relativePath: { eq: "archer.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blauetonne: file(relativePath: { eq: "blaue-tonne.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        routineer: file(relativePath: { eq: "routineer.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        freckle: file(relativePath: { eq: "freckle-overtime.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    return (
        <Layout>
            <SEO title="Portfolio"/>
            <SubTitle title='Some of the things that I have worked on.'/>
            <p>
                Most of the projects I have worked on were contract work for customers of my employer, thus I can not
                show them here.
                However there are some professional projects that I can show off as well as side projects that I did in
                my own time.
            </p>

            <section className={styles.project}>
                <h4>Archer</h4>
                <div className={styles.divide}>
                    <ExtLink href='https://archer.graphics'>
                        <Img fluid={data.archer.childImageSharp.fluid} className={styles.image}/>
                    </ExtLink>
                    <table>
                        <tbody>
                        <tr>
                            <td><b>Type</b></td>
                            <td>Product development while employed at <ExtLink
                                href='https://byteagenten.de'>byteAgenten</ExtLink>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>
                                Archer consists of a visual design tool for creating data-driven SVGs and a Javascript
                                runtime for using these graphics in a web environment.
                                I was responsible for the technical development of the product including planning,
                                architecture, implementation, testing and distribution through app stores.
                            </td>
                        </tr>
                        <tr>
                            <td><b>Tech</b></td>
                            <td>Electron, Angular, node.js, Flux, Mac App Store, Microsoft Store</td>
                        </tr>
                        <tr>
                            <td><b>Links</b></td>
                            <td>
                                <ExtLink href='https://archer.graphics'>Website</ExtLink>
                                <br/>
                                <ExtLink
                                    href='https://itunes.apple.com/de/app/archer-editor-pro/id1332609371'>Mac App
                                    Store</ExtLink>
                                <br/>
                                <ExtLink href='https://github.com/byteAgenten/archer-runtime'>Github
                                    (Runtime)</ExtLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.project}>
                <h4>Routineer</h4>
                <div className={styles.divide}>
                    <ExtLink href='https://routineer.one/'>
                        <Img fluid={data.routineer.childImageSharp.fluid} className={styles.image}/>
                    </ExtLink>
                    <table>
                        <tbody>
                        <tr>
                            <td><b>Type</b></td>
                            <td>Side project</td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>
                                Web application that enables you to keep track your routines.
                                I tried to emulate a Bullet Journal-like tracker and used joyful fonts and colors to
                                make it fun.
                                The app runs completely in the browser, works offline and uses IndexedDB for storage.
                            </td>
                        </tr>
                        <tr>
                            <td><b>Tech</b></td>
                            <td>React, Typescript, PWA, IndexedDB</td>
                        </tr>
                        <tr>
                            <td><b>Links</b></td>
                            <td>
                                <ExtLink href='https://routineer.one/'>Website</ExtLink>
                                <br/>
                                <ExtLink href='https://github.com/sissbruecker/routineer'>Github</ExtLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.project}>
                <h4>Blaue Tonne Nürnberg</h4>
                <div className={styles.divide}>
                    <ExtLink href='https://blaue-tonne.events/'>
                        <Img fluid={data.blauetonne.childImageSharp.fluid} className={styles.image}/>
                    </ExtLink>
                    <table>
                        <tbody>
                        <tr>
                            <td><b>Type</b></td>
                            <td>Side project</td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>
                                Website that provides calendars for waste paper disposal for the city where I live in as
                                .ical and .pdf.
                                A Python scraper collects the data from the official web page. Then some scripts
                                automatically generate a static website from that data.
                            </td>
                        </tr>
                        <tr>
                            <td><b>Tech</b></td>
                            <td>Python, Scrapy, Preact</td>
                        </tr>
                        <tr>
                            <td><b>Links</b></td>
                            <td>
                                <ExtLink href='https://blaue-tonne.events/'>Website</ExtLink>
                                <br/>
                                <ExtLink href='https://github.com/sissbruecker/blaue-tonne-nbg'>Github</ExtLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.project}>
                <h4>Overtime Calculator</h4>
                <div className={styles.divide}>
                    <ExtLink href='https://github.com/sissbruecker/freckle-overtime'>
                        <Img fluid={data.freckle.childImageSharp.fluid} className={styles.image}/>
                    </ExtLink>
                    <table>
                        <tbody>
                        <tr>
                            <td><b>Type</b></td>
                            <td>Side project</td>
                        </tr>
                        <tr>
                            <td><b>Description</b></td>
                            <td>
                                Command line tool that calculates overtime.
                                It fetches logged time entries from letfreckle.com, and then calculates the weekly and
                                total overtime.
                            </td>
                        </tr>
                        <tr>
                            <td><b>Tech</b></td>
                            <td>node.js</td>
                        </tr>
                        <tr>
                            <td><b>Links</b></td>
                            <td>
                                <ExtLink href='https://github.com/sissbruecker/freckle-overtime'>Github</ExtLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
};

export default PortfolioPage;
