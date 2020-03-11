import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Nav.module.scss"

import userStore from '../../stores/UserStore';

export class Nav extends Component {
    state = {
        collapsed: true,
        user: null
    }

    componentDidMount() {
        //userStore
        this.userStoreRemoveListener = userStore.addListener((user) => {
            this.setState({ user: user });
        });
        this.setState(userStore.getState());
        //External Click
        document.addEventListener('click', this.handleExternalClick, false)
    }

    componentWillUnmount() {
        //userStore
        this.userStoreRemoveListener();
        //External Click
        document.removeEventListener('click', this.handleExternalClick, false)
    }

    toggleShow = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    handleExternalClick = (e) => {
        if (!this.node.contains(e.target))
            this.setState({ collapsed: true })
    }

    render() {
        return (
            <nav ref={node => this.node = node} className={styles.nav}>
                <Link className={styles.logo} to="/">
                    <img src="/banner.svg" alt="RLVoid" />
                </Link>
                <button className={styles.toggle} onClick={this.toggleShow}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className={[styles.content, this.state.collapsed ? null : styles.show].join(" ")}>
                    <div className={styles.navbar}>
                        <Link className={styles.item} to="/faq">Frequently Asked Questions</Link>
                        <a className={styles.item} href="https://discord.gg/23hJc74" target="_blank" rel="noopener noreferrer" aria-label="Discord">Support</a>
                    </div>
                    {this.state.user &&
                        <div className={styles.navbarRight}>
                            <div className={styles.item}>
                                <div className={styles.user}>
                                    <img className={styles.userAvatar} src={this.state.user.avatar} alt={`${this.state.user.username}'s Avatar`} />
                                    <span className={styles.userName}>{this.state.user.username}</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

export default Nav;
