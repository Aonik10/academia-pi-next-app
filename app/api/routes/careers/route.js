import { db } from "../../../utils/database";

export async function GET(request) {
    await db.connect();
    const careers = await db.Career.findAll();
    return Response.json({ careers });
}

export async function POST(request) {
    await db.connect();
    const { title } = await request.json();

    //check if university already exists
    const careerFound = await db.Career.findOne({ where: { title } });

    if (careerFound) {
        return new Response(
            JSON.stringify({
                message: "University already exist in the db",
            }),
            { status: 401 }
        );
    }

    //create university
    await db.Career.create({ title });
    return new Response(
        JSON.stringify({
            message: "Career added to db",
            title,
        }),
        { status: 200 }
    );
}
