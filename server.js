const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();
const server = app.listen(9000); // Change the port if necessary

const peerServer = ExpressPeerServer(server, {
  path: "/myapp",
});

app.use("/myapp", peerServer);

console.log("PeerJS server is running on port 9000");
