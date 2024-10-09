import { doingSignOut } from "@/actions/authActions";

export default function SignOut() {
  return (
    <form action={doingSignOut}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
