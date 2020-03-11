import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import TextTransition from "react-text-transition";
import Divider from "../components/layout/Divider";

import styles from "./Index.module.scss"

import tradeSessionStore from '../stores/TradeSessionStore';


export class Index extends Component {
    constructor(props) {
        super(props);
        this.tradePanel = React.createRef();
    }

    state = {
        tradeSession: {},
    }

    componentDidMount() {
        //tradeSessionStore
        this.tradeSessionStoreRemoveListener = tradeSessionStore.addListener((tradeSession) => {
            this.setState({ tradeSession });
        });
        this.setState({ tradeSession: tradeSessionStore.getState() });
    }

    componentWillUnmount() {
        //tradeSessionStore
        this.tradeSessionStoreRemoveListener();
    }

    render() {
        let buttonText = ""
        let infoText = []
        let loading = false
        switch (this.state.tradeSession ? this.state.tradeSession.state : 0) {
            case 0:
                buttonText = "Get Started"
                infoText =
                    <p>Click the button above to purge your unwanted Rocket League items into the void.
                    <br />Through Steam Bootstrapper, Rocket League will automatically launch if it is not already open and you will be placed in a trade session with our bot.</p>
                break;
            case 1:
                buttonText = "Creating Session"
                loading = true;
                infoText =
                    <p>Your trade session is being created.  This should only take a second.</p>
                break
            case 2:
                buttonText = "Connecting to Server"
                loading = true;
                infoText =
                    <p>Your trade session is being created.  This should only take a second.</p>
                break
            case 3:
                buttonText = "Join Party"
                infoText =
                    <p>Please allow Steam Bootstrapper to open Rocket League for you.
                    <br />You will then be placed in the trade session.
                    <br />If your Rocket League did not start or you were unable to join the party, please click the "Join Party" button above.</p>
                break
            case 4:
                buttonText = "In Trade Session"
                infoText =
                    <p>You have successfully joined a RLVoid trade session.
                    <br />Select the items you would like to purge into the void by offering them in the trade window.
                    <br />Once you have selected your items, accept the trade and watch as your inventory becomes instantly cleaner.</p>
                break
            default:
                buttonText = "Get Started"
        }
        return (
            <main>
                <div className={styles.landing}>
                    <div className={styles.landingBackground} />
                    <Divider className={styles.dividerBottom} />
                    <button className={styles.hoverArrow} onClick={() => this.tradePanel.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.17 150.62">
                            <polyline points="7.09 7.09 107.09 43.09 207.09 7.09" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="14.17" />
                            <polyline points="7.09 57.09 107.09 93.09 207.09 57.09" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="14.17" />
                            <polyline points="7.09 107.09 107.09 143.09 207.09 107.09" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="14.17" />
                        </svg>
                    </button>
                    <div className={styles.verticleCenter}>
                        <div>
                            <h1 className={styles.title}>Purge Your Unwanted Rocket League Items</h1>
                            <h1 className={styles.title}>Into the Void</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.howToTrade}>
                    <h1>How to Trade</h1>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <h2>Step 1</h2>
                            <p>Press the "Get Started" button below.</p>
                        </div>
                        <div className={styles.step}>
                            <h2>Step 2</h2>
                            <p>When prompted, allow RLVoid.com to open Steam Bootstrapper for you.</p>
                        </div>
                        <div className={styles.step}>
                            <h2>Step 3</h2>
                            <p>You will then be placed in the trade session.<br />Simply select which items you would like to get rid of by adding them to the trade.</p>
                        </div>
                        <div className={styles.step}>
                            <h2>Step 4</h2>
                            <p>Accept the trade.<br />Congratulations! You've just decluttered your Rocket League inventory.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.tradePanel}>
                    <Divider className={styles.dividerBottom} />
                    <Divider className={styles.dividerTop} />
                    <div className={styles.tradeContent} ref={this.tradePanel}>
                        <div className={styles.buttons}>
                            <button className={styles.button} onClick={tradeSessionStore.startSession} style={{ justifyContent: loading ? "space-between" : "center" }} disabled={loading || this.state.tradeSession.state === 4 ? "disabled" : false}>
                                <TextTransition className={styles.textTransition} text={buttonText} />
                                {loading && <ReactLoading type="spin" height="2rem" width="2rem" />}
                            </button>
                            <button className={styles.close} onClick={tradeSessionStore.closeSession} style={{ display: this.state.tradeSession.state > 2 ? "flex" : "none", justifyContent: this.state.tradeSession.closing ? "space-between" : "center" }} disabled={this.state.tradeSession.closing ? "disabled" : false}>
                                <TextTransition className={styles.textTransition} text={this.state.tradeSession.closing ? "Closing" : "Close Session"} />
                                {this.state.tradeSession.closing && <ReactLoading type="spin" height="2rem" width="2rem" />}
                            </button>
                        </div>
                        <div className={styles.infoText}>{infoText}</div>
                    </div>
                </div>
            </main >
        );
    }
}

export default Index;
