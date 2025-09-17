import mongoose, { Schema, Document } from 'mongoose';

export interface Quiz  extends Document {
    sessionId: Schema.Types.ObjectId;
    topicId:Schema.Types.ObjectId;
    documentId:Schema.Types.ObjectId;
    title?:String;
    questions:[];
    createdBy:Schema.Types.ObjectId

    
}

const QuizSchema:Schema<Quiz> = new mongoose.Schema({
    sessionId:{
        type:Schema.Types.ObjectId,
        ref:'Session'
    },
    topicId:{
        type:Schema.Types.ObjectId,
        ref:'topic'
    },
    documentId:{
        type:Schema.Types.ObjectId,
        ref:'document'
    },
    title:{
        type:String
    },
    questions:{
        type:[]
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'User'

    }


})

export default mongoose.model<Quiz>('quiz',QuizSchema);