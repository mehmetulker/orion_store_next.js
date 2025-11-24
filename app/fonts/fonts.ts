// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

// Google Fonts
// export const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// export const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Local font
export const publicSans = localFont({
  variable: "--font-public-sans",
  display: "swap",
  src: [
    { path: "./PublicSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./PublicSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./PublicSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./PublicSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});
