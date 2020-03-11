import React, { Component } from 'react';

import styles from "./Terms.module.scss";

export class Terms extends Component {
    render() {
        return (
            <main className={styles.main}>
                <h1 className={styles.heading}>Welcome to RLVoid: The First Automated Rocket League Decluttering Service!</h1>
                <p>Please read these terms carefully before using RLVoid. By continuing using RLVoid, you understand and accept the Terms and you agree to be bound by them and held liable for breaking these terms. If you do not agree to all of the Terms set forth herein, please do not use the Site.
RLVoid is a platform that serves as a decluttering mechanism for virtual items for the video game Rocket League which is owned by Psyonix Studios (US). This service is a Steam exclusive and users can only select Rocket League-supported virtual items to exchange these with our automated account all subject to the Steam user agreement, readily enforceable by RLVoid.com. The virtual items shall be exchanged in Rocket League, as provided for by that trade platform’s Terms of Use. Any exchange performed on RLVoid is by the user and is performed by the willingness of the user and is no way has any connection to fraudulent exchanges, since the exchanges are carried out by Rocket League users themselves.
RLVoid is not affiliated in any way with Rocket League and its affiliates.
When utilizing RLVoid, Rocket League users who own virtual items agree that any item traded to RLVoid is by their own accord and RLVoid does not receive any information detrimental to a users security. RLVoid serves as a decluttering service and all users act on their own will and are their own individual agent in respect to their own virtual items. All users who use RLVoid accept the purpose of the site as a decluttering mechanism and are willing to give away their items to clear inventory for a charge of zero.
RLVoid has no relation to gambling. RLVoid does not hold any drawings, lotteries and virtual casinos.
</p>
                <h2 className={styles.heading}>Usage of the Website</h2>
                <p>You must always check on your own that any actions you perform on the website are correct. The website shall not be held liable for any of your actions which may result in damages or any other negative consequences for you.</p>
                <h2 className={styles.heading}>Security</h2>
                <p>A user shall check their exchanges on their own. The user will be held solely responsible for their Steam account details and for keeping the password confidential. A user will also be held solely responsible for restricting access to their account they use at this website. Staff members will never add you on Steam, and will never contact you in any situation, shape, or form.</p>
                <h2 className={styles.heading}>Rights of RLVoid</h2>
                <p>We reserve the right to refuse any item.
                We reserve the right to deny service for any reason.
                We do not offer refunds for any reason. All trades are final.
                Any item traded to the site is available to be refunded provided the user contacts the appropriate site staff members within 12 hours. After that time span all trades are marked as final.
                </p>
                <h2 className={styles.heading}>Transfer</h2>
                <p>The website administrator may assign, subcontract or otherwise transfer their rights and/or obligations hereunder without notifying you or obtaining your consent. You, however, may not assign, subcontract or otherwise transfer your rights and/or obligations hereunder.</p>
                <h2 className={styles.heading}>Privacy Policy</h2>
                <p>Our site may use web cookies to enhance the user experience. By using our site you accept the usage of cookies. When you login to our website through Steam, we will be collecting your public Steam profile information in our database. We can not see the username, email or password for your Steam Account. We will store logs when you use our website. They will be mainly used to prevent abusive usage to our website and maintain site security.</p>
                <h2 className={styles.heading}>Signing in and Steam</h2>
                <p>When you sign in through Steam, we are not provided with your login credentials, instead we are given your Steam64ID, which is a value unique to you Steam account. This unique identifier can be used to get information such as your owned games, friends, avatar, and display name from the Steam Web API.</p>
                <h2 className={styles.heading}>Third-Paries</h2>
                <p>Your name, steamID, steam profile will not be shared with third parties; All data about your trades will be kept anonymous and secure to outside users.</p>
                <h2 className={styles.heading}>Limitations of Liability</h2>
                <p>Use of our services is at your own risk. RLVoid, Its owners and affiliates after the 12 hour window are not held responsible for any mistakes on the users end.</p>
                <h2 className={styles.heading}>Questions</h2>
                <p>Questions regarding our Terms of Service, Privacy Policy, or other policy related material can be directed to our team on our discord at <a href="https://discord.gg/23hJc74" target="_black" rel="noopener noreferrer">https://discord.gg/23hJc74</a></p>
            </main>
        );
    }
}

export default Terms;
