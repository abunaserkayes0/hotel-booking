'use server'
import { signIn, signOut } from "@/libs/auth";

export async function doingSignOut() {
    await signOut({ redirect: 'http://localhost:3000/login' });

}

export async function doingLogin(formData) {
    try {
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        });
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}