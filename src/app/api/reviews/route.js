import { connect } from "@/app/lib/mongodbConnect";
import { revalidatePath } from "next/cache";

export async function POST(req) {
    const reviews = await req.json();
    const collection = await connect("reviews");
    const result = await collection.insertOne(reviews);
    revalidatePath("/feedback")
    return Response.json(result);
}
//? get All Reviews.
export async function GET(req) {
    const collection = await connect("reviews");
    const result = await collection.find().toArray();
    return Response.json(result)
}