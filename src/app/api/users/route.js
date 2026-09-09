import { connect } from "@/app/lib/mongodbConnect";

//Todo get All users coll data.
export async function GET(req) {
    const collection = await connect("users");
    const allUserInfo = await collection.find().toArray();
    return Response.json(allUserInfo)
}


//Todo create db coll name is users and send some data.
export async function POST(req) {
    //? 1st setp get data.
    const data = await req.json();
    //? 2nd step sellect coll name. name is users.
    const collectionName = await connect("users");
    //? 3rd step inseted some data in users coll.
    const result = await collectionName.insertOne(data);
    //? last step returen result.
    return Response.json(result);
}

