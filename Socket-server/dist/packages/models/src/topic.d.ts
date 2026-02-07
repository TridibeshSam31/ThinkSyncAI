import mongoose, { Schema, Document } from 'mongoose';
export interface Topic extends Document {
    subjectId: Schema.Types.ObjectId;
    name: string;
    order: number;
}
declare const _default: mongoose.Model<Topic, {}, {}, {}, mongoose.Document<unknown, {}, Topic, {}, {}> & Topic & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=topic.d.ts.map