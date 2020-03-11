import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from "./NotFound.module.scss";

export class NotFound extends Component {
    render() {
        return (
            <main className={styles.main}>
                <span className={styles.title}>Whoops! Page Not Found</span>
                <Link to="/">Go back to the Home Page</Link>
            </main>
        );
    }
}

export default NotFound;
