import mongoose, { Schema, Document } from 'mongoose';
export interface Quiz extends Document {
    sessionId: Schema.Types.ObjectId;
    topicId: Schema.Types.ObjectId;
    documentId: Schema.Types.ObjectId;
    title?: String;
    questions: [
        {
            question: String;
            options: String[];
            answer: String;
        }
    ];
    createdBy: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<Quiz, {}, {}, {}, mongoose.Document<unknown, {}, Quiz, {}, {}> & Quiz & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=quiz.d.ts.map