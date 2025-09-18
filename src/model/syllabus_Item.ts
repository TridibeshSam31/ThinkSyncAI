import mongoose, { Schema, Document } from 'mongoose';


export interface Syllabus  extends Document {
    sessionId:Schema.Types.ObjectId,
    subjectId:Schema.Types.ObjectId,
    topicName:Schema.Types.ObjectId;
    description:string;
    order:Number;
    status?:"pending"|"in-progress"|"completed",
    updatedBy:Schema.Types.ObjectId

}

const syllabusSchema:Schema<Syllabus> = new mongoose.Schema({
    sessionId:{
        type:Schema.Types.ObjectId,
        ref:'Session'
    },
    subjectId:{
        type:Schema.Types.ObjectId,
        ref:'subject'
    },
    topicName:{
        type:Schema.Types.ObjectId,
        ref:'topic'
    },
    description:{
        type:String,

    },
    order:{
        type:Number
    },
    status:{
        type:String,
        enum: ["pending", "in-progress", "completed"]
    },
    updatedBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }



})

export default mongoose.model<Syllabus>('syllabus_Item',syllabusSchema)