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
const documentsSchema = new mongoose_1.default.Schema({
    sessionId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Session',
        required: [true, 'Session Id is required'],
    },
    subjectId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Subject',
        required: [true, 'Subject Id is required'],
    },
    topicId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Topic',
        required: [true, 'Topic Id is required'],
    },
    uploadedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: [true, 'Uploaded By is required'],
    },
    fileName: {
        type: String,
        required: [true, 'File name is required']
    },
    fileUrl: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        enum: ["pdf", "docx", "pptx", "txt", "csv", "jpg", "jpeg", "png", "gif", "webp"],
        required: [true, 'File type is required'],
    },
    size: {
        type: Number,
        required: true,
        min: [1, "File size must be greater than 0"],
        max: [500 * 1024 * 1024, "File size must be less than 500MB"],
    },
    folder: {
        type: String,
        default: null,
    },
}, {
    timestamps: true,
});
documentsSchema.index({ sessionId: 1, subjectId: 1, topicId: 1 });
const documentsModel = mongoose_1.default.models.documents ||
    mongoose_1.default.model('documents', documentsSchema);
exports.default = documentsModel;
//# sourceMappingURL=document.js.map