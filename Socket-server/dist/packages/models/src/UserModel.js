"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [32, 'Password must be less than 32 characters long'],
    },
    avatar: {
        type: String,
        default: null,
    },
    role: {
        type: String,
        enum: ["creator", "member", "unassigned"],
        default: "unassigned",
    },
    sessionsJoined: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: 'Session',
        default: [],
    },
    sessionsCreated: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: 'Session',
        default: [],
    },
}, {
    timestamps: true,
});
const UserModel = mongoose_1.default.models.User ||
    mongoose_1.default.model('UserModel', UserSchema);
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map