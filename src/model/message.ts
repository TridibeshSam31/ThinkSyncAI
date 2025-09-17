import mongoose, { Schema, Document } from 'mongoose';

//we could also use types instead of interface 
export interface Message extends Document {
sessionId:Schema.Types.ObjectId;
senderId:string;
content:string;
messageType?:"text|image|file" , default:"text";
fileUrl:string;
fileName:string;

}


const MessageSchema:Schema<Message> = new mongoose.Schema({
    sessionId: {
        type: Schema.Types.ObjectId,
        ref:"Session"
    },
    senderId:{
        type:String,
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
        required:true
    }

})

export default mongoose.model<Message>('Message',MessageSchema);