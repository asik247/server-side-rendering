import { connect } from "@/app/lib/mongodbConnect";
export async function POST(req) {
        const data = await req.json();
        const usersCollection = await connect("firstNextJSColl");
        const result = await usersCollection.insertOne(data);
        return Response.json(result);   
    }
