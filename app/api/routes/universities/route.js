import { db } from "../../../utils/database";

export async function GET(request) {
    await db.connect();
    const universities = await db.University.findAll();
    return Response.json({ universities });
}

export async function POST(request) {
    await db.connect();
    const { title } = await request.json();

    //check if university already exists
    const universityFound = await db.University.findOne({ where: { title } });

    if (universityFound) {
        return new Response(
            JSON.stringify({
                message: "University already exist in the db",
            }),
            { status: 401 }
        );
    }

    //create university
    await db.University.create({ title });
    return new Response(
        JSON.stringify({
            message: "University added to db",
            title,
        }),
        { status: 200 }
    );
}
