import { db } from "../../../utils/database";

export async function GET(request) {
    await db.connect();
    const users = await db.User.findAll();
    return Response.json({ users });
}

export async function POST(request, response) {
    try {
        //connect to DB
        await db.connect();

        // obtain body's data
        const body = await request.json();

        // check if user already exists
        const userFound = await db.User.findOne({
            where: { email: body.email },
        });

        if (userFound) {
            return response(
                JSON.stringify({
                    message: "User already exists",
                    data: body.email,
                }),
                { status: 401 }
            );
        }

        // creates an object with the data
        const data = {
            first_name: body.name,
            last_name: body.lastname,
            password: body.password,
            email: body.email,
            phone_number: body.phoneNumber,
            university_id: body.university[0],
            career_id: body.career[0],
        };

        // Save user in the DB
        const user = await db.User.create(data);
        console.log(user.toJSON());

        return response(
            JSON.stringify({
                message: "User created successfully",
                data: body.email,
            }),
            { status: 200 }
        ).redirect(200, "/");
    } catch (error) {
        console.log(error);
        return response(
            JSON.stringify({
                message: "An error ocurred",
            }),
            { status: 401 }
        );
    }
}

/*

import User from "../../models/users";

export async function GET(request) {
    const users = await User.findAll();
    return Response.json({ users: users[0] });
}

export async function POST(request) {
    const body = await request.json();
    return new Response(JSON.stringify(body), { status: 404 });
}

*/
