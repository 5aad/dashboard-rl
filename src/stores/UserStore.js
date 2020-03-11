class UserStore {
    constructor(initialState) {
        this.state = initialState;
        this.listeners = [];

        fetch("/api/user", {
            credentials: 'include'
        }).then(response => {
            if (response.status >= 400) {
                throw new Error();
            }
            return response.json();
        }).then(user => {
            this.setState(user);
        }, () => { });
    }

    addListener(listener) {
        this.listeners.push(listener);
        const removeListener = () => {
            this.listeners = this.listeners.filter((l) => listener !== l);
        };
        return removeListener;
    }

    setState(state) {
        this.state = state;
        for (const listener of this.listeners) {
            listener(state);
        }
    }

    getState() {
        return this.state;
    }
}

const userStore = new UserStore();
export default userStore;