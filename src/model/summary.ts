import mongoose, { Schema, Document } from 'mongoose';

export interface Summary extends Document {
    documentId:Schema.Types.ObjectId;
    summaryText:string;
    generatedBy:Schema.Types.ObjectId;
    tokensUsed:number;
}

const summarySchema:Schema<Summary> = new mongoose.Schema({
    documentId:{
        type:Schema.Types.ObjectId,
        ref:'Document',
    },
    summaryText:{
        type:String,
        required:true
    },
    generatedBy:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    tokensUsed:{
        type:Number
    }

})

export default mongoose.model<Summary>('summary',summarySchema)

