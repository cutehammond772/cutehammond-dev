import localFont from "next/font/local";

export const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const monoplex = localFont({
  src: [
    {
      path: "./MonoplexKR-Text.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./MonoplexKR-TextItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-monoplex",
});

export const ridibatang = localFont({
  src: "./RIDIBatang.otf",
  weight: "400",
  display: "swap",
  variable: "--font-ridibatang",
});
