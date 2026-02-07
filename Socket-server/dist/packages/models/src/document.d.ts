import mongoose, { Schema, Document } from 'mongoose';
export interface documents extends Document {
    sessionId: Schema.Types.ObjectId;
    subjectId: Schema.Types.ObjectId;
    topicId: Schema.Types.ObjectId;
    uploadedBy: Schema.Types.ObjectId;
    fileName: string;
    fileUrl: string;
    fileType: "pdf" | "docx" | "pptx" | "txt" | "csv" | "jpg" | "jpeg" | "png" | "gif" | "webp";
    size: number;
    folder?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const documentsModel: mongoose.Model<documents, {}, {}, {}, mongoose.Document<unknown, {}, documents, {}, {}> & documents & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default documentsModel;
//# sourceMappingURL=document.d.ts.map