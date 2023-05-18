import { db } from "../../../utils/database";
import { compareSync } from "bcryptjs";

export async function POST(request) {
    // el password ya deberia llegar encriptado
    try {
        await db.connect();

        const { email, password, remember } = await request.json();

        const userFound = await db.User.findOne({ where: { email } });

        if (!userFound) {
            return new Response(
                JSON.stringify({
                    status: "Error",
                    message: "User not found",
                }),
                { status: 401 }
            );
        }

        const matchPassword = compareSync(password, userFound.password);

        if (!matchPassword) {
            return new Response(
                JSON.stringify({
                    status: "Error",
                    message: "Wrong password",
                }),
                { status: 401 }
            );
        }

        return new Response(
            JSON.stringify({
                status: "Success",
                message: "Correct",
            }),
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return;
    }
}
