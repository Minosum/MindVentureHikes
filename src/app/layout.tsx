import type { Metadata } from "next";
import './globals.css'
import FootingComponent from "./components/FootingComponent/FootingComponent";
import DiyBurger from "./components/diyBurger/DiyBurger";

export const metadata: Metadata = {
    title: "Mindventure Hikes",
    icons: {
        icon: "/mindventureLogo.png"
    }
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
                {children}
                <FootingComponent />
            </body>
        </html>
    );
}
