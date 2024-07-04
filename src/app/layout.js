import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Security System Test",
  description: "test",
};

export default function RootLayout({ children }) {
  return (
    <AppContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppContextProvider>
  );
}
