import mongoose, { Schema, Document } from 'mongoose';


export interface Message extends Document {
sessionId:Schema.Types.ObjectId;
senderId:Schema.Types.ObjectId;
content:string;
messageType?:"text|image|file" , default:"text";
fileUrl?:string;
fileName?:string;

}


const MessageSchema:Schema<Message> = new mongoose.Schema({
    sessionId: {
        type: Schema.Types.ObjectId,
        ref:"Session"
    },
    senderId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type:String,
        required: true
    },
    messageType:{
        type:String,
        enum:["text","image","file"],
        default:"text"
    },
    fileUrl:{
        type:String,
        default:null
    },
    fileName:{
        type:String,
        default:null
    }

})

export default mongoose.model<Message>('Message',MessageSchema);