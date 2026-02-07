"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const SessionSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    code: {
        type: String,
        required: [true, 'Code is required'],
        unique: true,
    },
    description: {
        type: String,
        default: 'No description provided',
        maxlength: [500, 'Description must be less than 500 characters'],
        minlength: [10, 'Description must be at least 10 characters long'],
    },
    messages: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: 'Message',
        default: [],
    },
    documents: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: 'Document',
        default: [],
    },
    quizzes: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: 'Quiz',
        default: [],
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: [true, 'Creator is required'],
    },
    members: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: 'UserModel',
        default: function () {
            return this.creator ? [this.creator] : [];
        },
    },
}, {
    timestamps: true,
});
const SessionModel = mongoose_1.default.models.Session ||
    mongoose_1.default.model('Session', SessionSchema);
exports.default = SessionModel;
//# sourceMappingURL=Session.js.map