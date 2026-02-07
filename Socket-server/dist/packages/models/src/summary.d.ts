import mongoose, { Schema, Document } from 'mongoose';
export interface Summary extends Document {
    documentId: Schema.Types.ObjectId;
    summaryText: string;
    generatedBy: Schema.Types.ObjectId;
    tokensUsed: number;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<Summary, {}, {}, {}, mongoose.Document<unknown, {}, Summary, {}, {}> & Summary & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=summary.d.ts.map