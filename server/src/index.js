const Websocket = require("ws");
const ServerSetting = Object.assign(require("./ws_setting.json"), { noServer: true });

const ws = new Websocket.Server(ServerSetting, () => {
    console.log("The server is actually running, You ouhhhh");
});

ws.on("connection", (socket, request) => {
    console.log(socket, request);
});
