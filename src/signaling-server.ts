import * as WebSocket from "ws";
// @ts-ignore
const PORT = process.env.PORT ?? 3000;

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});

setInterval(() => {
    wss.emit(Date.now())
}, 2000);
