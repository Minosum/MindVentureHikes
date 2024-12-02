import type { Metadata } from "next";
import NavBar from "./components/NavBar/NavBar";
import BurgerMenu  from "./components/BurgerMenu/BurgerMenu";
import './globals.css'
import DiyBurger from "./components/diyBurger/DiyBurger";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DiyBurger />
        {/* <BurgerMenu /> */}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
