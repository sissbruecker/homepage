import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';
import SubTitle from '../components/subtitle';
import styles from './resume.module.css';

const ResumePage = () => (
    <Layout>
        <SEO title="Résumé"/>

        <section id='education' className={styles.section}>
            <SubTitle title='Education'/>
            <ul>
                <li>Graduate engineer for information and communication technologies,
                    University of Cooperative Education Eisenach,
                    2005 - 2008
                </li>
                <li>Certified Scrum Master 1</li>
            </ul>
        </section>

        <section id='employments' className={styles.section}>
            <SubTitle title='Full-stack developer' label='byteAgenten GmbH, 2009 - present'/>
            <p>
                These are some noteworthy projects that I have worked on in over 10 years of employment at byteAgenten
                GmbH.
                It's hard to find an appropriate title here because I have done pretty much everything from project
                coordination, requirements engineering, architecture, implementation, backend, frontend, testing,
                database administration, infrastructure, Dev-Ops, team lead, consulting, coaching, training and writing.
            </p>

            <ul className={styles.projects}>

                <Project title='Web application for remote update planning of healthcare devices'
                         customer='Siemens Healthineers'
                         time='09/2017 - 12/2018'
                         skills='Java EE, React, Typescript, REST, SQL Server, SAP, Teradata, Scrum'>
                    <li>Architecture for backend and frontend, technology decisions</li>
                    <li>Requirements engineering with customer</li>
                    <li>Implementation of backend and frontend features</li>
                    <li>Interfaces to SAP, data warehouse, shares, authentication/authorization services</li>
                    <li>Performance optimization to handle thousands of devices in backend and fronted</li>
                    <li>Testing, DevOps, documentation</li>
                    <li>Training new developers</li>
                </Project>

                <Project title='Frontend for diagnostic software for motorcycles'
                         customer='AVL Ditest'
                         time='01/2017 - 04/2017'
                         skills='Electron, React, Typescript, REST, Web sockets, Java, Spring, Scrum'>
                    <li>Consulting for modern web frontend technologies</li>
                    <li>Architecture for frontend stack with build, tests, CI, documentation</li>
                    <li>Integration with backend using REST and Web sockets</li>
                    <li>Provide training for customer</li>
                </Project>

                <Project
                    title='Product development of <em>Archer</em>, a visual designer and runtime for reactive, data-driven SVGs'
                    customer='byteAgenten GmbH'
                    time='03/2014 - 01/2018'
                    skills='Electron, NW.js, Angular, Flux, node.js'>
                    <li>Concept and architecture</li>
                    <li>Implemented most of the technical solution, highlights:</li>
                    <li>Desktop application using web technologies on Mac and Windows</li>
                    <li>Graphical designer for SVGs</li>
                    <li>Complete undo/redo support</li>
                    <li>Distribution through Mac App Store, Windows Store</li>
                    <li>Automated testing, CI</li>
                </Project>

                <Project title='Web application for monitoring and maintenance of trains'
                         customer='Siemens IC'
                         time='03/2013 - 03/2014'
                         skills='Java, Angular, SPA, REST, SQL Server, SVG, Google Maps'>
                    <li>Frontend architecture as HTML5 SPA</li>
                    <li>Implemented several features in backend and frontend such as:</li>
                    <li>Live and historical tracking of trains on Google Maps</li>
                    <li>Graphical rule designer</li>
                    <li>Data-driven graphics based on sensor data</li>
                    <li>Performance optimizations to handle thousands of events and millions of sensor data</li>
                </Project>

                <Project title='Web application for variant management of gears in consumer vehicles'
                         customer='Daimler AG'
                         time='09/2010 - 06/2014'
                         skills='C#, .Net, Adobe Flex, SPA, SOAP, SQL Server'>
                    <li>Architecture for backend and frontend, technology decisions</li>
                    <li>Requirements engineering with customer</li>
                    <li>Implementation of backend and frontend</li>
                    <li>Testing, maintenance, documentation</li>
                </Project>

                <Project title='Product development of <em>logdirector</em>, a central logging server'
                         customer='byteAgenten GmbH'
                         time='01/2009 - 12/2013'
                         skills='Java, C#, Adobe Flex, SPA, SOAP, JDBC, MySQL, SQL Server, Maven'>
                    <li>Planning and implementation of several features, such as:</li>
                    <li>Reimplemented frontend as single page application using Adobe Flex</li>
                    <li>Graphical event viewer</li>
                    <li>Syntax for searching structured events</li>
                    <li>SOAP webservice</li>
                    <li>Logging clients for Java and .Net</li>
                    <li>Backends for MySQL and SQL Server</li>
                    <li>Testing, maintenance, CI</li>
                </Project>

                <Project title='Web-based sales platform for large drives'
                         customer='Siemens Industries'
                         time='01/2009 - 06/2011'
                         skills='C#, Asp.Net, Oracle, SOAP'>
                    <li>Implemented startup calculation for engines, user interfaces, SAP interface, SOAP
                        interface
                    </li>
                    <li>Testing, maintenance</li>
                </Project>

            </ul>

        </section>

    </Layout>
);

export default ResumePage;
