"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connection = {};
async function dbConnect() {
    var _a, _b;
    if (connection.isConnected) {
        console.log('Already connected to the database');
        return;
    }
    try {
        const db = await mongoose_1.default.connect(process.env.MONGO_URL || '', {});
        connection.isConnected = (_b = (_a = db.connections[0]) === null || _a === void 0 ? void 0 : _a.readyState) !== null && _b !== void 0 ? _b : 0;
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}
exports.default = dbConnect;
//# sourceMappingURL=dbConnect.js.map