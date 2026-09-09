import { connect } from "@/app/lib/mongodbConnect";
import { ObjectId } from "mongodb";
import { updateTag } from "next/cache";

export async function GET(req, { params }) {
    const { id } = await params;
    const allUsers = await connect("users");
  
    const singleUser = await allUsers.findOne({
        _id: new ObjectId(id)
    })
    return Response.json(singleUser)

}

//Todo Delete specifique data in db users coll.

export async function DELETE(req, { params }) {
    const { id } = await params;
    const collection = await connect("users");

    const result = await collection.deleteOne({
        _id: new ObjectId(id),
    });

    return Response.json(result);
}

//Todo update users collection data.
export async function PATCH(req, { params }) {

  const updateData = await req.json();
  const {id} = await params;
  const collection = await connect("users");
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: updateData,
    }
  );

  return Response.json(result);
}