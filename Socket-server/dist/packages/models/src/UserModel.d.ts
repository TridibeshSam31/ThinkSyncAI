import mongoose, { Schema, Document } from 'mongoose';
export interface User extends Document {
    username: string;
    email: string;
    password: string;
    avatar?: string;
    role: "creator" | "member" | "unassigned";
    sessionsJoined: Schema.Types.ObjectId[];
    sessionsCreated: Schema.Types.ObjectId[];
}
declare const UserModel: mongoose.Model<User, {}, {}, {}, mongoose.Document<unknown, {}, User, {}, {}> & User & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default UserModel;
//# sourceMappingURL=UserModel.d.ts.map