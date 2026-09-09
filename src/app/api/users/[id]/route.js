import { connect } from "@/app/lib/mongodbConnect";
import { ObjectId } from "mongodb";

export async function GET(req,{params}) {
    const {id} = await params;
    const allUsers = await connect("users");
    // return Response.json(allUsers)
    const singleUser = await allUsers.findOne({
        _id:new ObjectId(id)
    })
    return Response.json(singleUser)
    
}

//Todo Delete specifique data in db users coll.

export async function DELETE(req, { params }) {
    const {id} = await params;
  const collection = await connect("users");

  const result = await collection.deleteOne({
    _id: new ObjectId(id),
  });

  return Response.json(result);
}