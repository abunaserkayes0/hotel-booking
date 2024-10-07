import { auth } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";
const Navbar = async ({ mode }) => {
  const session = await auth();
  console.log(session);

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
            <Link href="/login" className="login">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
