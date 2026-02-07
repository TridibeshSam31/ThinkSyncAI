import express from "express";
import http from "http";
import dotenv from "dotenv";
import { createSocketServer } from "./socket";

dotenv.config();

const app = express();
const server = http.createServer(app);

createSocketServer(server);

server.listen(4000, () => {
  console.log("🚀 Socket server running on port 4000");
});
