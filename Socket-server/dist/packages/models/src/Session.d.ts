import mongoose, { Schema, Document } from 'mongoose';
export interface Session extends Document {
    name: string;
    code: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    creator: Schema.Types.ObjectId;
    members: Schema.Types.ObjectId[];
    messages: Schema.Types.ObjectId[];
    documents: Schema.Types.ObjectId[];
    quizzes: Schema.Types.ObjectId[];
}
declare const SessionModel: mongoose.Model<Session, {}, {}, {}, mongoose.Document<unknown, {}, Session, {}, {}> & Session & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default SessionModel;
//# sourceMappingURL=Session.d.ts.map