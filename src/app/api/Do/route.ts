import dbConnect from "@/lib/dbConnect";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import { User } from "next-auth";
import Session from "@/model/Session";
import Document from "@/model/document";

export async function POST(request: NextRequest) {
    await dbConnect();

    const session = await getServerSession(authOptions);
    const user: User = session?.user as User;

      if(!session || !session?.user) {
        return Response.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    );
  }
  const userId = user._id;
  try{
    const { sessionId, subjectId, topicId, uploadedBy, fileName, fileUrl, fileType, size } = await request.json();
    const session = await Session.findById(sessionId);
    if(!session) {
      return Response.json(
        { success: false, message: 'Session not found' },
        { status: 404 }
      );
    }

    const doc = await Document.create({
      sessionId,
      subjectId,
      topicId,
      uploadedBy,
      fileName,
      fileUrl,
      fileType,
      size
    });
    await Session.findByIdAndUpdate(sessionId, { $push: { documents: doc._id } });

    return Response.json(
      { success: true, message: 'Document created successfully', doc },
      { status: 200 }
    );

  }catch(error){
    console.log(error);
    return Response.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
    await dbConnect();
   const {searchParams} = new URL(request.url);
   const sessionId = searchParams.get('sessionId');

   const docs = await Document.find({ sessionId }).populate('uploadedBy',"username");
   return Response.json(
    { success: true, docs },
    { status: 200 }
   );
}
