import { NextResponse } from "next/server";
import User from "../../models/User";

export async function GET(request) {
    const users = await User.findAll();
    return Response.json({ users: users[0] });
}

export async function POST(request) {
    const body = await request.json();
    return new Response(JSON.stringify(body), { status: 404 });
}
