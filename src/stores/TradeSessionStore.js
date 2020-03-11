import userStore from "./UserStore"

class TradeSessionStore {
    constructor() {
        this.listeners = [];
    }

    state = {
        error: null,
        state: 0,
        sessionID: null,
        websocket: null,
        closing: false
    }

    addListener(listener) {
        this.listeners.push(listener);
        const removeListener = () => {
            this.listeners = this.listeners.filter((l) => listener !== l);
        };
        return removeListener;
    }

    setState = (state) => {
        this.state = Object.assign(this.state || {}, state);
        for (const listener of this.listeners) {
            listener(this.state);
        }
    }

    getState() {
        return this.state;
    }

    startSession = async () => {
        if (this.state.sessionID) {
            this.setState({ state: 2, error: null })
            window.location = `steam://joinlobby/252950/${this.state.sessionID}`;
        } else {
            //Fetch New Session
            this.setState({ state: 1, error: null })
            let sessionResponse = await fetch("/api/sessions/new", {
                credentials: 'include'
            })
            if (sessionResponse.status >= 400)
                return this.setState({ error: "Error while fetching session" })
            let session = await sessionResponse.json();
            if (session.status === "error")
                return this.setState({ error: session.error.message })
            this.setState({ state: 2, sessionID: session.lobby });
            window.location = `steam://joinlobby/252950/${this.state.sessionID}`;
        }
        if (!this.state.websocket) {
            //Create New Websocket Session
            this.setState({ websocket: new WebSocket(`wss://${process.env.NODE_ENV === "development" ? "dev." : ""}rlvoid.com/api/sessions/websocket`) });
        } else {
            this.setState({ state: 3 })
        }
        this.state.websocket.addEventListener('open', () => {
            this.setState({ state: 3 })
        })
        this.state.websocket.addEventListener('close', () => {
            this.setState({ state: 0, websocket: null, sessionID: null })
        })
        this.state.websocket.addEventListener('error', (e) => {
            console.log(e)
        });
        this.state.websocket.addEventListener('message', (message) => {
            let data = JSON.parse(message.data);
            data.forEach(msg => {
                switch (msg.type) {
                    case "user":
                        userStore.setState(msg.user)
                        break;
                    case "lobbyUserJoin":
                        this.setState({ state: 4 })
                        break;
                    case "lobbyDestroyed":
                        this.setState({ state: 0, websocket: null, sessionID: null, error: null});
                        break;
                    default:
                        console.log(msg)
                        break;
                }
            })
        })
    }
    closeSession = async () => {
        this.setState({closing: true})
        let closeResponse = await fetch("/api/sessions/close/", {
            credentials: 'include'
        })
        this.setState({closing: false})
        if (closeResponse.status >= 400)
            return this.setState({ error: "Error while closing session" })
        let session = await closeResponse.json();
        if (session.status === "error")
            return this.setState({ error: session.error.message })
        this.setState({ state: 0, websocket: null, sessionID: null, error: null});

    }
}

const tradeSessionStore = new TradeSessionStore();
export default tradeSessionStore;