import { createServer } from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import dbConnect from "./dbConnect.js";
import { Message, Session, UserModel } from "@repo/models";

export function createSocketServer(server: ReturnType<typeof createServer>) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });

  io.use(async (socket, next) => {
    try {
      await dbConnect();

      const token = socket.handshake.auth.token;
      if (!token) return next(new Error("Unauthorized"));

      const decoded = jwt.verify(
        token,
        process.env.NEXTAUTH_SECRET!
      ) as { _id: string };

      const user = await UserModel.findById(decoded._id);
      if (!user) return next(new Error("Unauthorized"));

      socket.data.userId = user._id.toString();
      next();
    } catch (err) {
      console.error("Socket auth error:", err);
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", (socket) => {
    console.log("🟢 User connected:", socket.data.userId);

    socket.on("join_session", ({ sessionId }) => {
      socket.join(`session:${sessionId}`);
    });

    socket.on("send_message", async ({ sessionId, content }) => {
      const msg = await Message.create({
        sessionId,
        senderId: socket.data.userId,
        content,
      });

      io.to(`session:${sessionId}`).emit("message:new", msg);
    });
  });

  return io;
}
