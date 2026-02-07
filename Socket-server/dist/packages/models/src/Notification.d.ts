import mongoose, { Schema, Document } from "mongoose";
export interface Notification extends Document {
    userId: Schema.Types.ObjectId;
    sessionId: Schema.Types.ObjectId;
    type: "system" | "message" | "document" | "quiz" | "syllabus" | "summary";
    message: string;
    subjectId?: Schema.Types.ObjectId;
    read: boolean;
    createdAt: Date;
    updatedAt: Date;
}
declare const NotificationModel: mongoose.Model<Notification, {}, {}, {}, mongoose.Document<unknown, {}, Notification, {}, {}> & Notification & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default NotificationModel;
//# sourceMappingURL=Notification.d.ts.map