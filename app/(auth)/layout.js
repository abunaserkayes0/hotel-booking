import { dbConnect } from "@/database/dbConnect";
import "../globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata = {
  title: "Hotel Relax",
  description: "Hotel Relax is the most popular with a variety of features",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar mode={false} />
        </main>
        {children}
      </body>
    </html>
  );
}
