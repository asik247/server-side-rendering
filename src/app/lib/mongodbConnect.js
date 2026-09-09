import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export const connect = async (collectionName) => {
    await client.connect();

    const db = client.db("nextJs");

    return db.collection(collectionName);
};