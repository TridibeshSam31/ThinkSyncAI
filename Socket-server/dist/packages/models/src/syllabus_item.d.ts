import mongoose, { Schema, Document } from 'mongoose';
export interface Syllabus extends Document {
    sessionId: Schema.Types.ObjectId;
    subjectId: Schema.Types.ObjectId;
    topicId: Schema.Types.ObjectId;
    description: string;
    order: Number;
    status?: "pending" | "in-progress" | "completed";
    updatedBy: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
declare const syllabusModel: mongoose.Model<Syllabus, {}, {}, {}, mongoose.Document<unknown, {}, Syllabus, {}, {}> & Syllabus & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default syllabusModel;
//# sourceMappingURL=syllabus_item.d.ts.map