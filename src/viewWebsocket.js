class ViewWebsocket {
    handlers = []
    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onmessage = async (msg) => {
          try {
            const event = JSON.parse(await msg.data);
            this.handleEvent(event);
          } catch {}
        };
    }
    handleEvent(event) {
        this.handlers.forEach(handler => {
            handler(event)
        });
    }
    addHandler(handler) {
        this.handlers.push(handler);
    }
    removeHandler(handler) {
        this.handlers = this.handlers.filter(h => h !== handler);
    }
    send(itemId, itemViews) {
        this.socket.send(JSON.stringify({itemId, itemViews}));
    }
}
const viewWebsocket = new ViewWebsocket();
export { viewWebsocket };