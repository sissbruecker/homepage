import { Link } from 'gatsby';
import React from 'react';
import cn from 'classnames';
import styles from './header.module.css';

const Header = () => (
    <header className={cn('container', styles.header)}>
        <Link to='/'>
            <h1>Sascha Ißbrücker</h1>
        </Link>

        <nav className={styles.nav}>
            <Link to='/'>Résumé</Link>
            <Link to='/portfolio'>Portfolio</Link>
        </nav>
    </header>
);

export default Header
