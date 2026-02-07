import mongoose, { Schema, Document } from 'mongoose';
export interface Message extends Document {
    sessionId: Schema.Types.ObjectId;
    senderId: Schema.Types.ObjectId;
    content: string;
    messageType?: "text" | "image" | "file";
    fileUrl?: string;
    fileName?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const messageModel: mongoose.Model<Message, {}, {}, {}, mongoose.Document<unknown, {}, Message, {}, {}> & Message & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default messageModel;
//# sourceMappingURL=message.d.ts.map