import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './contact.module.css';
import SubTitle from '../components/subtitle';

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>

        <SubTitle title='This is how you can reach me.'/>
        <p>
            If you want to contact me regarding job offers or freelance work, your best option is probably to send me a mail.
        </p>

        <section className={styles.contact}>
            <table>
                <tbody>
                <tr>
                    <td><strong>Mail</strong></td>
                    <td>
                        <a href='mailto:sascha.issbruecker@gmail.com'>sascha.issbruecker@gmail.com</a>
                    </td>
                </tr>
                <tr>
                    <td><strong>Links</strong></td>
                    <td>
                        <a href='https://www.xing.com/profile/Sascha_Issbruecker'>Xing</a>
                        <br/>
                        <a href='https://github.com/sissbruecker'>Github</a>
                        <br/>
                        <a href='https://medium.com/@sissbruecker'>Medium</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>

    </Layout>
);

export default ContactPage;
