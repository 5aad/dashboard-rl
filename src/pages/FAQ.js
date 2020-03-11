import React, { Component } from 'react';

import styles from "./FAQ.module.scss";

export class FAQ extends Component {
    render() {
        return (
            <main className={styles.main}>
                <h1 className={styles.heading}>Frequently Asked Questions</h1>
                <h2>Which platforms is RLVoid available on?</h2>
                <p>RLVoid is Steam only due to technical restrictions.  Unfortunately, this means that console players are unable to use this service.</p>
                <h2>When I try to join the trade, I receive the error "Party Not Found"?</h2>
                <p>Please try, closing and re-opening your trade session.  <br />If any further issues persist, join the discord for support.</p>
                <h2>What happens to the items I decide to give to the bot?</h2>
                <p>Most items are left on the bot and other items will be returned back to the community through giveaways with content creators and discord platforms!</p>
                <h2>What if I want my item(s) back?</h2>
                <p>If the trade occured less than 12 hours ago, we guarantee we can get your item back.<br />Join our <a href="https://discord.gg/23hJc74">Discord</a> and contact our support team for more info.</p>
            </main>
        );
    }
}

export default FAQ;
