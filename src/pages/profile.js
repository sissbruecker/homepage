import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SubTitle from '../components/subtitle';
import styles from './profile.module.css';

const ProfilePage = () => (
    <Layout>
        <SEO title="Profile"/>

        <div className={styles.grid}>

            <section>
                <SubTitle title='Experience'/>
                <ul>
                    <li><strong>Software Developer</strong> with more than 10 years of contract work and product
                        development
                    </li>
                    <li>more dramatic: Senior Software Engineer, Full-stack Web Developer</li>
                    <li>contract work for customers such as Daimler, Siemens Healthcare, Siemens Power Generation,
                        Siemens Industry, Siemens Infrastructure and Cities
                    </li>
                    <li>worked on products for software developers and UX designers</li>
                    <li>work activities include: project coordination, requirements engineering, architecture,
                        implementation, backend, frontend, testing, database administration, infrastructure, dev-ops,
                        team lead, consulting, mentoring, training and writing
                    </li>
                    <li>have a look at my <a href='/resume'>résumé</a> or <a href='/portfolio'>portfolio</a> for more
                        detailed info
                    </li>
                </ul>
            </section>

            <section>
                <SubTitle title='Technologies*'/>
                <div className={styles.block}>
                    <h4>Backend</h4>
                    <ul>
                        <li>Java / Java EE - 10 years</li>
                        <li>node.js - 4 years</li>
                        <li>C# / .Net - 4 years</li>
                    </ul>
                </div>

                <div className={styles.block}>
                    <h4>Frontend</h4>
                    <ul>
                        <li>HTML, CSS, Javascript - 10 years</li>
                        <li>Single page applications - 7 years</li>
                        <li>Angular - 6 years</li>
                        <li>React - 3 years</li>
                        <li>Typescript - 3 years</li>
                    </ul>
                </div>

                <small><em>
                    *These are just the most important ones, there is much more.
                    Also I very much believe that an experienced developer is able to transfer skills between languages,
                    technologies, frameworks or libraries.
                </em></small>
            </section>

            <section>
                <SubTitle title='How would I describe my professional self?'/>
                <ul>
                    <li>able to work reliably and independently</li>
                    <li>logical thinking</li>
                    <li>critical thinking, validation of requirements and decisions</li>
                    <li>user-oriented thinking beyond technical aspects</li>
                    <li>focus on quality, usability, performance</li>
                    <li>can find practical solutions in short amount of time</li>
                    <li>good didactic skills</li>
                    <li>curious and interested in new technologies and developments in software engineering</li>
                </ul>
            </section>

        </div>

    </Layout>
);

export default ProfilePage;
