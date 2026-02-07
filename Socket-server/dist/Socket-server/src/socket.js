"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSocketServer = createSocketServer;
const socket_io_1 = require("socket.io");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dbConnect_js_1 = __importDefault(require("./dbConnect.js"));
const models_1 = require("@repo/models");
function createSocketServer(server) {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "http://localhost:3000",
            credentials: true,
        },
    });
    io.use(async (socket, next) => {
        try {
            await (0, dbConnect_js_1.default)();
            const token = socket.handshake.auth.token;
            if (!token)
                return next(new Error("Unauthorized"));
            const decoded = jsonwebtoken_1.default.verify(token, process.env.NEXTAUTH_SECRET);
            const user = await models_1.UserModel.findById(decoded._id);
            if (!user)
                return next(new Error("Unauthorized"));
            socket.data.userId = user._id.toString();
            next();
        }
        catch (err) {
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
            const msg = await models_1.Message.create({
                sessionId,
                senderId: socket.data.userId,
                content,
            });
            io.to(`session:${sessionId}`).emit("message:new", msg);
        });
    });
    return io;
}
//# sourceMappingURL=socket.js.map