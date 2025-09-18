import mongoose, { Schema, Document } from 'mongoose';

export interface Quiz  extends Document {
    sessionId: Schema.Types.ObjectId;
    topicId:Schema.Types.ObjectId;
    documentId:Schema.Types.ObjectId;
    title?:String;
    questions:[{
        question: String;
        options: String[];
        answer: String;
    }];
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
        type:String,
        required:true
    },
    questions:{
        type:[  {
            question: { type: String, required: true },
            options: [{ type: String, required: true }],
            answer: { type: String, required: true }
          }],
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true

    }


})

export default mongoose.model<Quiz>('quiz',QuizSchema);