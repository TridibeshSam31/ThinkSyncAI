import { Server } from "socket.io";
import {Session} from "@/model/Session";
import {Message} from "@/model/message";
import {Document} from "mongoose";
import {User} from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import {NextApiResponseServerIO} from "@/types/next";



export default async function SocketHandler(req: any, res: NextApiResponseServerIO) {
    if (!res.socket.server.io) {
        console.log("🔌 Starting Socket.IO server...");
        const io = new Server(res.socket.server, {
          path: "/api/socket_io",
          addTrailingSlash: false,
          cors: {
            origin: "*", 
            methods: ["GET", "POST"],
          },
        });
}}