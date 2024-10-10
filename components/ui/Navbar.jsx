import { auth } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";
import SignOut from "./SignOut";
const Navbar = async ({ mode }) => {
  // Fetch user session from NextAuth.js
  const session = await auth();

  return (
    <nav>
      <Link href="/">
        <Image src="/logo.svg" width={150} height={150} alt="Logo" />
      </Link>
      {mode && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {session?.user ? (
              <div className="flex items-center justify-center gap-4">
                <SignOut />
                <span>
                  <Image
                    className="w-8 h-8 border rounded-full"
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            ) : (
              <Link href="/login" className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
