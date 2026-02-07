import mongoose, { Schema, Document } from 'mongoose';
export interface Subject extends Document {
    name: string;
    sessionId: Schema.Types.ObjectId;
    description?: string;
}
declare const subjectModel: mongoose.Model<Subject, {}, {}, {}, mongoose.Document<unknown, {}, Subject, {}, {}> & Subject & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default subjectModel;
//# sourceMappingURL=subject.d.ts.map