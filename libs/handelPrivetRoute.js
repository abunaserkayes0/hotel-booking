import { auth } from "./auth";
import { redirect } from "next/navigation";

export default async function handelPrivetRoute() {
    const session = await auth();
    if (!session) {
        redirect('/login')
    }

    return session.user;
}