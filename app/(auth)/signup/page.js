import RegistrationForm from "@/components/auth/RegistrationForm";
import SocialLogins from "@/components/auth/SocialLogins";

export default function SignUp() {
    return (
        <>
            <section className="h-screen grid place-items-center my-20">
                <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                    <h4 className="font-bold text-2xl">Sign up</h4>
                    <RegistrationForm />
                    <SocialLogins mode='signup' />
                </div>
            </section>
        </>
    );
}