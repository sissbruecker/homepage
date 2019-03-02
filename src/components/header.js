import { Link } from 'gatsby';
import React from 'react';
import cn from 'classnames';
import styles from './header.module.css';

const Header = () => (
    <header className={cn('container', styles.header)}>
        <Link to='/' className={styles.plain}>
            <h1>Sascha Ißbrücker</h1>
        </Link>

        <nav className={styles.nav}>
            <Link to='/resume'>Résumé</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    </header>
);

export default Header
