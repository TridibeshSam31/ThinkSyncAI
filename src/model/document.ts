import mongoose, { Schema, Document } from 'mongoose';


export interface documents  extends Document {
    sessionId: Schema.Types.ObjectId;
    subjectId: Schema.Types.ObjectId;
    topicId: Schema.Types.ObjectId;
    uploadedBy: Schema.Types.ObjectId;
    fileName:string;
    fileUrl:string;
    fileType: "pdf" | "docx" | "pptx";
    size:number; 
}

const documentsSchema:Schema<documents> = new mongoose.Schema({
    sessionId:{
        type:Schema.Types.ObjectId,
        ref:'Session',
    },
    subjectId:{
        type:Schema.Types.ObjectId,
        ref:'Subject'
    },
    topicId:{
        type:Schema.Types.ObjectId,
        ref:'Topic'
    },
    uploadedBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    fileName:{
        type:String,
        required:[true,'File name is required']
    },
    fileUrl:{
        type:String,
        required:true
    },
    fileType:{
        type:String,
        enum:["pdf","docx","pptx"],
    },
    size:{
        type:Number,
        required:true,
        min: [1, "File size must be greater than 0"], 
        max: [500 * 1024 * 1024, "File size must be less than 500MB"], 
    }

})

export default mongoose.model<documents>('documents',documentsSchema)